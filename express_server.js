const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());//middleware already inside json file

app.listen(PORT, () => console.log(`hosted on http://localhost:${PORT}`));


///ROUTING
app.get("/octopus", (req, res) => {
  //every time when this endpoint is requested - localhost:8080/octopus - run the function below
  //request (req) - incoming data
  //response (res) - outcoming data
  res.status(200).send({
    octopus: "🐙",
    funFact: "Octopuses arms have mind of their own",
  });
});

app.post("/octopus/:id", (req, res) => {
  const { id } = req.params;
  const logo = req.body; //important to know - express doesn't parse json in the body by default - middleware needs to be set up to parse data into json before the function
  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }
  res.send({
    octopus: `🐙 with your ${logo} and ID of ${id}`,
  });
});
