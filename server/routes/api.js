
const express = require('express');
const router = express.Router();
const recallController = require('../controller/recallController');



router.get('/', recallController.getRecent, (req, res) => {
    res.status(200).json(res.locals.recalls);
}
);

router.get('/:id', recallController.getStore, (req,res) => {
    res.status(200).json(res.locals.storerecalls);
})

router.post('/', recallController.postRecall, (req,res) => {
    res.status(201).json(res.locals.post);
});

router.delete('/:id', recallController.deleteRecall, (req,res) =>{
    res.status(201).json(res.locals.deleted);
});

module.exports = router;