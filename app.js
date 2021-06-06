const express = require('express');

const app = express();

//middleware
app.use('/posts', () => {
    console.log('Middleware sedang berjalan');
})

//iso gawe route
app.get('/', (req, res) => {
    res.send('JAAAAAANCCOOOOOOOOOOOOOO');
})

app.get('/posts', (req, res) => {
    res.send('Neng posts cuk');
})

//server
app.listen(3000);