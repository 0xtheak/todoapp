const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/home_controllers');
const createControllers = require('../controllers/create_controllers');
const deleteControllers = require('../controllers/delete_controllers');

router.get('/', homeControllers.home);
router.post('/create-todo', createControllers.create);
router.get('/delete-todo', deleteControllers.delete);


module.exports = router;
