
const express = require('express');
const router = express.Router();
const recallController = require('../controller/recallController');



router.get('/', recallController.getStore, (req, res) => {
    res.status(200).json('log data pls')
}
);

module.exports = router;