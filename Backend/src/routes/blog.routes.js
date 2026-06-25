const express = require('express');
const {
  getBlogs,
  getBlogBySlug,
  getAdminBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog
} = require('../controllers/blog.controller');

const protect = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

const router = express.Router();

// Public routes
router.route('/').get(getBlogs);
router.route('/:slug').get(getBlogBySlug);

// Admin routes (require auth and specific role)
// For now we will just use protect and require role 'admin'
router.route('/admin/all')
  .get(protect, authorize('admin'), getAdminBlogs);
  
router.route('/admin/create')
  .post(protect, authorize('admin'), createBlog);
  
router.route('/admin/:id')
  .get(protect, authorize('admin'), getBlogById)
  .put(protect, authorize('admin'), updateBlog)
  .delete(protect, authorize('admin'), deleteBlog);

module.exports = router;
