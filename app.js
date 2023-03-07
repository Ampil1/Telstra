const express = require("express");

const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
app.get("/", (req, res) => {
  res.send("Wecome to Telstra");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.post("/create", async (req, res) => {
const result = req.body;
delete result.referenceData;
   res.status(200).json({
    status:200,
    data:result
   })
});
