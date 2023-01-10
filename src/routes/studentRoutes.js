import express from 'express';
import { createStudent, getAllStudents } from '../controllers/studentController'
import { auth } from '../middlewares/auth';

const router = express.Router();

router.post('/student', auth('student-create'), createStudent);
router.get('/student', auth('student-get'), getAllStudents);

export default router;
