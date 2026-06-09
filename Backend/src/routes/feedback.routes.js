const express = require('express');
const {
    createFeedback,
    getAllFeedbacks,
    getMyFeedback,
    updateFeedback,
    deleteFeedback
} = require('../controllers/feedback.controller');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.route('/')
    .get(getAllFeedbacks)
    .post(authenticate, createFeedback);

router.route('/my')
    .get(authenticate, getMyFeedback);

router.route('/:id')
    .put(authenticate, updateFeedback)
    .delete(authenticate, deleteFeedback);

module.exports = router;
