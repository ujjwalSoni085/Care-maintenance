const Blog = require('../models/Blog');
const asyncHandler = require('express-async-handler');

// Get all published blogs
exports.getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ isPublished: true })
    .select('-content') // exclude heavy content for listing
    .sort({ createdAt: -1 })
    .populate('author', 'name email');
  res.status(200).json({ success: true, count: blogs.length, data: blogs });
});

// Get single blog by slug
exports.getBlogBySlug = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true })
    .populate('author', 'name email');
  
  if (!blog) {
    return res.status(404).json({ success: false, message: 'Blog not found' });
  }
  
  res.status(200).json({ success: true, data: blog });
});

// Admin: Get all blogs (including unpublished)
exports.getAdminBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find()
    .select('-content')
    .sort({ createdAt: -1 })
    .populate('author', 'name email');
  res.status(200).json({ success: true, count: blogs.length, data: blogs });
});

// Admin: Create blog
exports.createBlog = asyncHandler(async (req, res) => {
  // Add user to req.body
  req.body.author = req.user.id;
  
  if (req.body.isPublished && !req.body.publishedAt) {
    req.body.publishedAt = new Date();
  }
  
  const blog = await Blog.create(req.body);
  res.status(201).json({ success: true, data: blog });
});

// Admin: Get single blog by ID
exports.getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    return res.status(404).json({ success: false, message: 'Blog not found' });
  }
  res.status(200).json({ success: true, data: blog });
});

// Admin: Update blog
exports.updateBlog = asyncHandler(async (req, res) => {
  // If being published and no publishedAt date exists, set it
  if (req.body.isPublished) {
    const existingBlog = await Blog.findById(req.params.id);
    if (existingBlog && !existingBlog.publishedAt) {
      req.body.publishedAt = new Date();
    }
  }

  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  
  if (!blog) {
    return res.status(404).json({ success: false, message: 'Blog not found' });
  }
  
  res.status(200).json({ success: true, data: blog });
});

// Admin: Delete blog
exports.deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  
  if (!blog) {
    return res.status(404).json({ success: false, message: 'Blog not found' });
  }
  
  res.status(200).json({ success: true, data: {} });
});
