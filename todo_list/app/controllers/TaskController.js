const ToDoServices = require('../services/ToDoServices');

class TaskController {
    async readTasks(req, res, next) {
        ToDoServices.getTasks()
            .then(tasks => {
                res.json({ tasks })
            })
            .catch(next);
    }

    async createNewTask(req, res, next) {
        ToDoServices.createTask(req.body.task)
            .then(task => {
                console.log(task);
                res.json({ task })
            })
            .catch(next)
    }
}


module.exports = new TaskController();
