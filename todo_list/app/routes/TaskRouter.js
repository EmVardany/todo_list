const router = require('express').Router();
const taskController = require('../controllers/TaskController');


router.get('', taskController.readTasks);

module.exports = router;