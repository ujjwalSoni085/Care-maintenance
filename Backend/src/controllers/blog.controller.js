const Blog = require('../models/Blog');

// Get all published blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true })
      .select('-content') // exclude heavy content for listing
      .sort({ createdAt: -1 })
      .populate('author', 'name email');
    res.status(200).json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Get single blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true })
      .populate('author', 'name email');
    
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Admin: Get all blogs (including unpublished)
exports.getAdminBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .select('-content')
      .sort({ createdAt: -1 })
      .populate('author', 'name email');
    res.status(200).json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Admin: Create blog
exports.createBlog = async (req, res) => {
  try {
    // Add user to req.body
    req.body.author = req.user.id;
    
    if (req.body.isPublished && !req.body.publishedAt) {
      req.body.publishedAt = new Date();
    }
    
    const blog = await Blog.create(req.body);
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Validation Error', error: error.message });
  }
};

// Admin: Get single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Admin: Update blog
exports.updateBlog = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({ success: false, message: 'Validation Error', error: error.message });
  }
};

// Admin: Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
