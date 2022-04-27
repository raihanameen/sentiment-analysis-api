const express = require("express");

const router = express.Router();

/**
 * Get API
 * @route GET /analysis
 * @group Sentiment Analysis API
 * @returns {object} 200 - Sentiment Analysis
 * @returns {Error}  default - Unexpected error
 */
 router.get("/analysis", (req, res) => {
     //send mock data
        res.status(200).json({
            status: 'success',
            data: {
                "analysis": {
                    "sentiment": {
                        "score": 0.5,
                        "magnitude": 0.5
                    },
                    "keywords": [
                        {
                            "text": "test",
                            "relevance": 0.5,
                            "sentiment": {
                                "score": 0.5,
                                "magnitude": 0.5
                            }
                        }
                    ]
                }
            }
        });
 });

 module.exports = router;