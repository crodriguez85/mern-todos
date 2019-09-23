import express from 'express';
const router = express.Router();
import Task from '../models/task.model.js';

router.route('/').get((req, res) => {
    Task.find()
    .then(tasks => res.json(tasks))
    .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);
    
    const newTask = new Task({
        username,
        description,
        duration,
        date
    });

    newTask.save()
    .then(() => res.json('Task Added'))
    .catch(error => res.status(400).json('Error: ' + error));

});


module.exports = router;