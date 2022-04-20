const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb+srv://root:a43FOv7OYcc4sd76@cluster0.ui872.mongodb.net/todo_list?retryWrites=true&w=majority');

module.exports = client;