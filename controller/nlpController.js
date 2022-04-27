const express = require("express");

const router = express.Router();
const {
    sentimentAnalysisHandler,
  } = require("../controller/nlpController.js");
/**
 * Get API
 * @route GET /analysis
 * @group Sentiment Analysis API
 * @returns {object} 200 - Sentiment Analysis
 * @returns {Error}  default - Unexpected error
 */
 router.get("/analysis", sentimentAnalysisHandler);

 module.exports = router;