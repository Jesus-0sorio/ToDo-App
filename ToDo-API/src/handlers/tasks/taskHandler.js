const Task = require('../../models/task');

const getTasks = async (req, res) => {
  try {
    const todos = await Task.findAll();
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ message: 'La descripcion es requerida' });
    }

    const todo = await Task.create({ description });
    return res.status(201).json({ message: 'Tarea creada', todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Task.findByPk(id);

    if (!todo) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    await todo.destroy();
    return res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};
