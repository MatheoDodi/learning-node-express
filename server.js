const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

app.get('/contact/:name', (req, res) => {
    res.render('contact', {person: req.params.name});
})

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
})