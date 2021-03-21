const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log('Connection succesful'))
    .catch(err => {
        console.log(err);
    });