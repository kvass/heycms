const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/heycms', { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
    console.log("success HeyCMS");
})
mongoose.connection.on('error', function () {
    console.log("error HeyCMS!!!");
})
mongoose.connection.on('disconnected', function () {
    console.log("Oh my gad, HeyCMS.");
})


module.exports = mongoose;
