const express = require('express')
const app = express()
const projectsRoutes = require('./routes/projects.routes')
const tasksRoutes = require('./routes/tasks.routes')

//middlewares

app.use(express.json())

app.use(projectsRoutes)
app.use(tasksRoutes)

module.exports = app