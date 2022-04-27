const express = require("express");

const router = express.Router();
const { sentimentAnalysisHandler } = require("../controller/nlpController.js");
/**
 * POST API
 * @route POST /analysis
 * @group Sentiment Analysis API
 * @returns {object} 200 - Sentiment Analysis
 * @returns {Error}  default - Unexpected error
 */
router.post("/analysis", sentimentAnalysisHandler);

module.exports = router;
