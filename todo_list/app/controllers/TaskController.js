const ToDoServices = require('../services/ToDoServices');

class TaskController {
    async readTasks(req, res, next) {
        ToDoServices.getTasks()
            .then(tasks => {
                res.json({ tasks })
            })
            .catch(next);
    }
}


module.exports = new TaskController();
