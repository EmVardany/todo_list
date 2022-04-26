const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:a43FOv7OYcc4sd76@cluster0.ui872.mongodb.net/todo_list?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const client = mongoose.connection;

module.exports = client;