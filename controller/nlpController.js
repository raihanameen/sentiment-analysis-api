const sentimentHandler = require("sentiment");

var sentiment = new sentimentHandler();

exports.sentimentAnalysisHandler = async (req, res) => {
  console.log(req.body.input);
  var result = sentiment.analyze(req.body.input);
  console.log(result);
  res.status(200).json({
    status: "success",
    data: {
      analysis: result,
    },
  });
};
