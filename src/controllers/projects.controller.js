const Project = require('../models/Project')
const Task = require('../models/Task')


const getProjects = async (req,res) => {
    const projects =await  Project.findAll()
    res.send(projects)
}

const createProject = async (req,res) => {
    const {name,priority,description} = req.body

    const newProject = await  Project.create({
        name:name,
        description:description,
        priority:priority
    })

    res.send(newProject)
}

const updateProject = async(req,res) => {
    const {id} = req.params
    const {name,priority,description} = req.body

    const project = await Project.findByPk(id)

    project.name = name
    project.priority = priority
    project.description = description
    await project.save()
    res.send(project)
}
const deleteProject = async(req,res) => {
    
    const {id} = req.params
    await Project.destroy({
        where: {
            id:id,
        }
    })
    res.send('Eliminado').send(200)
}

const getProject = async(req,res) => {
    
    const {id} = req.params
    const project =  await Project.findOne({
        where:{
            id:id
        }
    })
    res.json(project)
}

const getProjectTask = async (req,res) => {
    const {id} = req.params
    const tasks = await Task.findAll({
        where:{
            projectId:id
        }
    })
    res.json(tasks)
}

module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject,
    getProject,
    getProjectTask
}