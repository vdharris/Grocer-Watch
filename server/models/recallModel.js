const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://vandanharris:giqKuVnpCVTL8zyz@cluster0.nrfnsj7.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'FDArecalls'
})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

// const speciesSchema = new Schema({
//     name: String,
//     classification: String,
// });
// // creats a model for the 'species' collection that will be part of the export
// const Species = mongoose.model('species', speciesSchema);

const foodRecallSchema = new Schema({
    status: String,
    city: String,
    state: String,
    country: String,
    classification: String,
    openfda: Object,
    product_type: String,
    event_id: String,
    recalling_firm: {type:String, required: true},
    address_1: String,
    address_2: String,
    postal_code: String,
    voluntary_mandated: String,
    initial_firm_notification: String,
    distribution_pattern: String,
    recall_number: String,
    product_description: {type:String, reqired: true},
    product_quantity: String,
    reason_for_recall: String,
    recall_initiation_date: String,
    center_classification_date: String,
    termination_date: String,
    report_date: {type:String, required: true},
    code_info: String,
})
//creates a model and foodRecalls collection for each of the 'foodRecall' documents that will be added and taken from the DB
const FoodRecalls = mongoose.model('foodRecall', foodRecallSchema);

module.exports = {
    FoodRecalls
};