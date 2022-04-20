const client = require('../db')

const getUsers = async () => {
    try {
        await client.connect()
        console.log('Connected to mongo---');
        const users = client.db().collection('users')
        return users;
    } catch (e) {
        console.log("could not connect", e);
    }
}

module.exports = getUsers;