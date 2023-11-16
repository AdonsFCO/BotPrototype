import express from "express";
import bodyParser from "body-parser";

const app = express(); // Corrected the capitalization of "express"
app.use(bodyParser.json());

app.post("/comment", (req, res) => {
  let info = req.body;
  console.log("New information has been added", info);
  res.status(200).send('Información recibida ' + JSON.stringify(info));
   
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Main server is running on port 3000");
});
