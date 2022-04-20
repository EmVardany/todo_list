const router = require('express').Router();
const taskController = require('../controllers/TaskController');


router.get('', taskController.readTasks);
router.post('', taskController.createNewTask);


module.exports = router;