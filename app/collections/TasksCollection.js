const client = require('../db')

const getTasks = async () => {
    try {
        await client.connect()
        console.log('Connected to mongo---');
        const users = client.db().collection('tasks')
        return users;
    } catch (e) {
        console.log("could not connect", e);
    }
}

module.exports = getTasks;