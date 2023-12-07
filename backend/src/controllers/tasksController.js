const tasksModel = require('../models/tasksModel');

const getAll = async (requst, response) => {
    const tasks = await tasksModel.getAll();
    return response.status(200).json(tasks);
};

module.exports = {
    getAll
};

