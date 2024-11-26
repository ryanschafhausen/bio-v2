const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.port || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('To-Do: All the things.');
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})