const express = require('express');
const upload = require('../middlewares/upload');
const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }
    
    // Cloudinary URL is stored in req.file.path
    const fileUrl = req.file.path;
    
    res.status(200).json({
      success: true,
      message: 'File uploaded successfully',
      url: fileUrl,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'File upload failed', error: error.message });
  }
});

module.exports = router;
