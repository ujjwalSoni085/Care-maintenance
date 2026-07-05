const Feedback = require('../models/feedback.model');
const asyncHandler = require('express-async-handler');

// @desc    Create feedback
// @route   POST /api/feedback
// @access  Private
exports.createFeedback = asyncHandler(async (req, res) => {
    const { rating, message, name } = req.body;

    // Check if user already submitted feedback
    const existingFeedback = await Feedback.findOne({ userId: req.user.id });
    if (existingFeedback) {
        res.status(400);
        throw new Error('You have already submitted feedback');
    }

    try {
        const feedback = await Feedback.create({
            userId: req.user.id,
            name: name || req.user.name || 'Anonymous User',
            rating,
            message
        });

        res.status(201).json({
            success: true,
            data: feedback
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400);
            throw new Error('You have already submitted feedback');
        }
        throw error;
    }
});

// @desc    Get all feedbacks
// @route   GET /api/feedback
// @access  Public
exports.getAllFeedbacks = asyncHandler(async (req, res) => {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    
    const totalReviews = feedbacks.length;
    const averageRating = totalReviews > 0 
        ? (feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews).toFixed(1)
        : 0;

    res.status(200).json({
        success: true,  
        averageRating: Number(averageRating),
        totalReviews,
        data: feedbacks
    });
});

// @desc    Get logged in user's feedback
// @route   GET /api/feedback/my
// @access  Private
exports.getMyFeedback = asyncHandler(async (req, res) => {
    const feedback = await Feedback.findOne({ userId: req.user.id });

    res.status(200).json({
        success: true,
        data: feedback
    });
});

// @desc    Update feedback
// @route   PUT /api/feedback/:id
// @access  Private
exports.updateFeedback = asyncHandler(async (req, res) => {
    let feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
        res.status(404);
        throw new Error('Feedback not found');
    }

    // Make sure user owns the feedback
    if (feedback.userId.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not authorized to update this feedback');
    }

    feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: feedback
    });
});

// @desc    Delete feedback
// @route   DELETE /api/feedback/:id
// @access  Private
exports.deleteFeedback = asyncHandler(async (req, res) => {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
        res.status(404);
        throw new Error('Feedback not found');
    }

    // Make sure user owns the feedback
    if (feedback.userId.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not authorized to delete this feedback');
    }

    await feedback.deleteOne();

    res.status(200).json({
        success: true,
        data: {}
    });
});
