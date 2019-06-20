const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
        res.render('index');
});


router.get('/contacts', (req, res) => {
    res.render('home/contacts');
});

router.get('/cooperation', (req, res) => {
    res.render('home/cooperation');
});

router.get('/aboutus', (req, res) => {
    res.render('home/aboutUs');
});

module.exports = router;