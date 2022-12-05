const Task = require("../models/Task")

const createTask = async (req,res) => {
    const {name,done,projectId} = req.body

    const task = await Task.create({
        name,
        done,
        projectId
    })
    await task.save()
    res.json(task)
}


const getTasks = async (req,res) => {
    const tasks = await Task.findAll()
    res.json(tasks)
}

const getTask = async (req,res) => {
    const {id} = req.params

    const task = await Task.findOne({
        id:id,
        attributes:['name']
    })

    res.json(task)
}

const updateTasks = async (req,res) => {
 const {id} = req.params
 
 const task = await Task.findOne({
    where: 
    {id}
 })
 task.set(req.body)

 await task.save()
 res.json(task)
}
const deleteTasks = async (req,res) => {
    const {id} = req.params

    const task = await Task.destroy({
        where: {id}
    })

    res.json(task)
 
}



module.exports = {
    createTask, 
    getTasks,
    getTask,
    updateTasks,
    deleteTasks
}