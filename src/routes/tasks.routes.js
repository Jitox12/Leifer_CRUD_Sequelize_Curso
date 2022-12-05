const {Router} = require('express')
const router = Router()
const {getTasks,createTask, updateTasks, deleteTasks, getTask} = require('../controllers/tasks.controller')
 
router.get('/tasks', getTasks)
router.post('/task',createTask)
router.put('/task/:id',updateTasks)
router.delete('/task/:id',deleteTasks)
router.get('/task/:id',getTask)

module.exports = router
