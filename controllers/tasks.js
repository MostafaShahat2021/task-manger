const { Error } = require("mongoose")
const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ length: tasks.length, tasks })
  } catch (error) {
    res.status(500).json({ Error: error.message })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ Error: error.message })
  }
}

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
      return res.status(404).json({ message: `No Task wit id: ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ Error: "Task not found", error: error.message })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
      return res.status(404).json({ message: `No Task wit id: ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ Error: error.message })
  }
}

const updateTask = async (req, res) => {
  try {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
      new: true,
      runValidators: true
    })
    if (!task) {
      return res.status(404).json({ message: `No Task wit id: ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({Error: error.message})
  }
}
// const updateTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findByIdAndUpdate(taskID, req.body, {
//       new: true,
//       runValidators: true
//     });
//     if (!task) {
//       return res.status(404).json({ message: `No Task with id: ${taskID}` });
//     }
//     const updatedTask = await Task.findById(taskID);
//     res.status(200).json(updatedTask)
//   } catch (error) {
//     res.status(500).json({
//       error: error.message
//     });
//   }
// };

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}