// Modules

const express = require("express");
const bodyParser = require("body-parser");

// Set port for server
const port = process.env.PORT || 3100;

// Express set up
let app = express();
app.use(bodyParser.json());


app.post("/webhook", (req, res, next) => {
  let action = req.body.result.action;
  let message =
    action === "get.wp.content"
      ? `Hey, our webhook is connected!`
      : `Sorry, I didn’t get that`;
  res.send({
    speech: message,
    displayText: message,
    source: "wp-webhook"
  });
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});