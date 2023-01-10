import express from 'express';
import { createStudent, getAllStudents } from '../controllers/studentController.js'
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', auth('student-create'), createStudent);
router.get('/', auth('student-get'), getAllStudents);

export default router;
