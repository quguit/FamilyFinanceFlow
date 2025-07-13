
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//route test
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server on http://localhost:3000');
});