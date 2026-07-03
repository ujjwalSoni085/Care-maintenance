const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
    },
    featuredImage: {
      type: String, // URL or path to the uploaded image
    },
    imageAlt: {
      type: String,
    },
    category: {
      type: String,
    },
    tags: [{
      type: String
    }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    publishedAt: {
      type: Date
    },
    // SEO Fields
    metaTitle: {
      type: String,
    },
    metaDescription: {
      type: String,
    },
    metaKeywords: {
      type: String,
    },
    canonicalUrl: {
      type: String,
    },
    robots: {
      type: String,
      default: 'index, follow'
    },
    // Open Graph
    ogTitle: {
      type: String,
    },
    ogDescription: {
      type: String,
    },
    ogImage: {
      type: String,
    },
    // Twitter Cards
    twitterTitle: {
      type: String,
    },
    twitterDescription: {
      type: String,
    },
    twitterImage: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
