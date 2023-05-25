//test will go here

const { FoodRecalls } = require('../models/recallModel');

const recallController = {};

recallController.getStore = async (req, res, next) => {
    // res.locals.recalls = ['here', 'is', 'arr'];
    // next();
    try {
        console.log('searching db');
        const result = await FoodRecalls.find({ state: "FL" }).exec();
        // res.locals.recalls = result;
        console.log('display results', result);
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = recallController;