const path = require('path');
const express = require('express');
const app = express();

const apiRouter = require('./routes/api');
const PORT = 3000;

//need below to take in post requests as json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api/food', apiRouter);


// route handler to respond with main app
app.get('/', (req, res) =>{
    res.status(200).json('At Main App')
    })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'src', 'index.html'));
//   });


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//configure express global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

//start server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;