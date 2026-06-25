import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import 'react-quill/dist/quill.snow.css'; // For basic Quill styles if needed

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${slug}`);
        setBlog(res.data.data);
      } catch (err) {
        setError('Blog post not found.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{error || 'Post not found'}</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">Return to Blog</Link>
      </div>
    );
  }

  // Construct absolute URL for the image if it's relative
  const imageUrl = blog.coverImage ? `http://localhost:5000${blog.coverImage}` : null;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>{blog.metaTitle || `${blog.title} - Care Maintenance Blog`}</title>
        <meta name="description" content={blog.metaDescription || blog.excerpt || `Read ${blog.title} on Care Maintenance.`} />
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta property="og:description" content={blog.metaDescription || blog.excerpt} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="mb-8">
        <Link to="/blog" className="text-blue-600 hover:text-blue-800 flex items-center mb-6">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {blog.title}
        </h1>
        <div className="flex items-center text-gray-500 mb-8">
          <span className="mr-4">
            Published on {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          {blog.author && (
            <span>By {blog.author.name}</span>
          )}
        </div>
      </div>

      {imageUrl && (
        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
          <img src={imageUrl} alt={blog.title} className="w-full h-auto object-cover max-h-[500px]" />
        </div>
      )}

      {/* The content comes from a rich text editor, so we render HTML directly */}
      <div 
        className="prose prose-lg max-w-none prose-blue"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
};

export default BlogDetailPage;
