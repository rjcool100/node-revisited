const express = require('express');

const router = express.Router();

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin/add-product');
});

module.exports = router;