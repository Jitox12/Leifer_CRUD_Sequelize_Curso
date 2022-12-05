const {Router} = require('express')
const router = Router()
const { createProject, getProjects, updateProject, deleteProject,getProject,getProjectTask} = require('../controllers/projects.controller')

router.get('/projects',getProjects)
router.post('/project',createProject)
router.put('/project/:id',updateProject)
router.delete('/project/:id',deleteProject)
router.get('/project/:id', getProject)
router.get('/project/:id/tasks', getProjectTask)

module.exports = router