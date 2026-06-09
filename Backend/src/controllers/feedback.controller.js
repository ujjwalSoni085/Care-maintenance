const Feedback = require('../models/feedback.model');

// @desc    Create feedback
// @route   POST /api/feedback
// @access  Private
exports.createFeedback = async (req, res) => {
    try {
        const { rating, message, name } = req.body;

        // Check if user already submitted feedback
        const existingFeedback = await Feedback.findOne({ userId: req.user.id });
        if (existingFeedback) {
            return res.status(400).json({
                success: false,
                message: 'You have already submitted feedback'
            });
        }

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
            return res.status(400).json({
                success: false,
                message: 'You have already submitted feedback'
            });
        }
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Get all feedbacks
// @route   GET /api/feedback
// @access  Public
exports.getAllFeedbacks = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Get logged in user's feedback
// @route   GET /api/feedback/my
// @access  Private
exports.getMyFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findOne({ userId: req.user.id });

        res.status(200).json({
            success: true,
            data: feedback
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Update feedback
// @route   PUT /api/feedback/:id
// @access  Private
exports.updateFeedback = async (req, res) => {
    try {
        let feedback = await Feedback.findById(req.params.id);

        if (!feedback) {
            return res.status(404).json({
                success: false,
                message: 'Feedback not found'
            });
        }

        // Make sure user owns the feedback
        if (feedback.userId.toString() !== req.user.id) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized to update this feedback'
            });
        }

        feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            data: feedback
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Delete feedback
// @route   DELETE /api/feedback/:id
// @access  Private
exports.deleteFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);

        if (!feedback) {
            return res.status(404).json({
                success: false,
                message: 'Feedback not found'
            });
        }

        // Make sure user owns the feedback
        if (feedback.userId.toString() !== req.user.id) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized to delete this feedback'
            });
        }

        await feedback.deleteOne();

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};
