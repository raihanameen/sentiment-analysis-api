exports.sentimentAnalysisHandler = async (req, res) => {

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
}