const express = require('express');
const router = express.Router();

const {
    getBlogs,
    getBlogBySlug,
    createBlog,
    updateBlog,
    deleteBlog,
    uploadImage
} = require('./blog.controller');

const { protect, authorize } = require('../auth/auth.middleware');
const upload = require('../../middlewares/upload');

// Public routes
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);

// Admin protected routes
router.post('/', protect, authorize('admin'), createBlog);
router.put('/:id', protect, authorize('admin'), updateBlog);
router.delete('/:id', protect, authorize('admin'), deleteBlog);

// Image upload route
router.post('/upload', protect, authorize('admin'), upload.single('image'), uploadImage);

module.exports = router;
