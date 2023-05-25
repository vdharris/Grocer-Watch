//test will go here
const mongoose = require('mongoose');
const { FoodRecalls } = require('../models/recallModel');

const recallController = {};

recallController.getRecent = async (req, res, next) => {
    try {
        console.log('searching db');
        const result = await FoodRecalls.find({}, null, {sort: {report_date: -1}, limit: 5, skip: 1});
        console.log('here is the DB output',result[0]);
        res.locals.recalls = result;
        // console.log('display results', result);
        next();
    } catch (error) {
        next(error);
    }
};

recallController.getStore = async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    try {
        const result = await FoodRecalls.find({recalling_firm: id}, null, {sort: {report_date: -1}, limit: 5});
        res.locals.storerecalls = result;
        // console.log('display results', result);
        next();
    } catch (error) {
        next(error);
    }
};

recallController.postRecall = async (req, res, next) => {
    // console.log(req.body);
    const { recalling_firm, report_date, product_description} = req.body;
    try{
        const post = await FoodRecalls.create({recalling_firm, report_date, product_description})
        // console.log(post);
        res.locals.post = post;
        next();
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

recallController.deleteRecall = async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such recall object id exist'})
    }
    
    try{
        const deleted = await FoodRecalls.findOneAndDelete({_id: id})
        // console.log(post);
        console.log(deleted);
        res.locals.deleted = deleted;
        next();
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

module.exports = recallController;