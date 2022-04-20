const router = require('express').Router();
const taskController = require('../controllers/TaskController');


router.get('', taskController.readTasks);
router.post('', taskController.createNewTask);
router.put('/:id', taskController.updateTaskById);
router.delete('/:id', taskController.deleteById);


module.exports = router;