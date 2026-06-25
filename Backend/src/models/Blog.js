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
    coverImage: {
      type: String, // URL or path to the uploaded image
    },
    metaTitle: {
      type: String,
    },
    metaDescription: {
      type: String,
    },
    tags: [{
      type: String
    }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft'
    },
    publishedAt: {
      type: Date
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
