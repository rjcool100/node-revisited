const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const addProductRouter = require('./routes/addproduct');
const productRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/admin', addProductRouter);
app.use(productRouter);

app.use((req, res, next) => {
    res.status(404).send("Page Not Found");
});

module.exports = app;