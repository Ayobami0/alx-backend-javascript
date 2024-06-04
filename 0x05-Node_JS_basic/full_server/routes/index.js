const express = require('express');
const { default: StudentsController } = require('../controllers/StudentsController');
const { default: AppController } = require('../controllers/AppController');

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
