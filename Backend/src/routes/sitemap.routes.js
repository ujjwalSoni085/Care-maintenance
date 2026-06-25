const express = require('express');
const builder = require('xmlbuilder');
const Blog = require('../models/Blog');

const router = express.Router();

router.get('/sitemap.xml', async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).select('slug updatedAt');
    
    // Set base URL. In production, this should ideally come from env config
    const baseUrl = process.env.CLIENT_URL || 'http://localhost:5173';
    
    const root = builder.create('urlset', { version: '1.0', encoding: 'UTF-8' });
    root.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

    // Add static routes
    const staticPages = ['', '/about', '/contact', '/services/electrician']; // Add important static routes
    staticPages.forEach(page => {
      const url = root.ele('url');
      url.ele('loc', `${baseUrl}${page}`);
      url.ele('changefreq', 'weekly');
      url.ele('priority', page === '' ? '1.0' : '0.8');
    });

    // Add dynamic blog routes
    blogs.forEach(blog => {
      const url = root.ele('url');
      url.ele('loc', `${baseUrl}/blog/${blog.slug}`);
      url.ele('lastmod', blog.updatedAt.toISOString());
      url.ele('changefreq', 'monthly');
      url.ele('priority', '0.6');
    });

    const xml = root.end({ pretty: true });

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).end();
  }
});

module.exports = router;
