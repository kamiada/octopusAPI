const app = require('express')();
const PORT = 8080;
app.listen(
    PORT,
    () => console.log(`hosted on http://localhost:${PORT}`)
)