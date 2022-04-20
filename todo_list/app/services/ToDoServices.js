const tasks = require('../collections/TasksCollection');


class ToDoServices {

    async getTasks() {
        try {
            const user = await (await tasks())
                .find({})
                .toArray()
            return user;
        } catch (err) {
            console.error(`Something went wrong: ${err}`);
        }
    }
}

module.exports = new ToDoServices();