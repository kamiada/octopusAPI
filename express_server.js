const app = require('express')();
const PORT = 8080;
app.listen(
    PORT,
    () => console.log(`hosted on http://localhost:${PORT}`)
)
app.get('/octopus', (req, res) => {
    //every time when this endpoint is requested - localhost:8080/octopus - run the function below
    //request (req) - incoming data
    //response (res) - outcoming data
    res.status(200).send({
        emoji: '🐙',
        funFact: 'Octopuses arms have mind of their own'
    });
})

app.post('/octopus/:id', (req, res) => {
    const {id} = req.params;
    const logo = req.body;
    if(!logo) {
        res.status(418).send({message: "We need a logo!"})
    }
})