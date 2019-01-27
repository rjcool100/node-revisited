const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send("<body><form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Submit</button></form></body>");
});

module.exports = router;