import express from "express";
import bodyParser from "body-parser";

const app = express(); // Corrected the capitalization of "express"
app.use(bodyParser.json());

app.post("/comment", (req, res) => {
  let info = req.body;
  console.log("New information has been added", info);

  if(info.ticket === "GBH2-1")
  {
      res.status(200).send('Información recibida ' + JSON.stringify(info));
   }
   else {res.status(200).send('This is not one of our tickets sorry')}  


});

app.listen(3000, () => {
  console.log("Main server is running on port 3000");
});
