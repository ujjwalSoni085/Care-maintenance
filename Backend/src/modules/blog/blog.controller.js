const Blog = require('../../models/Blog');

// @desc    Get all blogs (paginated)
// @route   GET /api/blogs
// @access  Public
exports.getBlogs = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const total = await Blog.countDocuments({ status: 'published' });

        const blogs = await Blog.find({ status: 'published' })
            .select('-content') // Exclude heavy content for listing
            .sort({ createdAt: -1 })
            .skip(startIndex)
            .limit(limit)
            .populate('author', 'name email');

        // Pagination result
        const pagination = {};
        if (endIndex < total) {
            pagination.next = { page: page + 1, limit };
        }
        if (startIndex > 0) {
            pagination.prev = { page: page - 1, limit };
        }

        res.status(200).json({
            success: true,
            count: blogs.length,
            pagination,
            data: blogs
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

// @desc    Get single blog by slug
// @route   GET /api/blogs/:slug
// @access  Public
exports.getBlogBySlug = async (req, res) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug })
            .populate('author', 'name email');
        
        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }
        
        res.status(200).json({ success: true, data: blog });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

// @desc    Create blog
// @route   POST /api/blogs
// @access  Private/Admin
exports.createBlog = async (req, res) => {
    try {
        // Add user to req.body
        req.body.author = req.user.id;
        
        const blog = await Blog.create(req.body);
        res.status(201).json({ success: true, data: blog });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Validation Error', error: error.message });
    }
};

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Private/Admin
exports.updateBlog = async (req, res) => {
    try {
        let blog = await Blog.findById(req.params.id);
        
        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        
        res.status(200).json({ success: true, data: blog });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Validation Error', error: error.message });
    }
};

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private/Admin
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        
        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        await blog.deleteOne();
        
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

// @desc    Upload image for blog
// @route   POST /api/blogs/upload
// @access  Private/Admin
exports.uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Please upload an image file' });
        }
        
        const imageUrl = `/uploads/${req.file.filename}`;
        
        res.status(200).json({
            success: true,
            message: 'Image uploaded successfully',
            data: { url: imageUrl }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};
