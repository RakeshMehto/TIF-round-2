import express from 'express';
import { createSchool, getAllSchools, getStudents } from '../controllers/schoolControllers.js'
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/school', auth('school-create'), createSchool);
router.get('/school', auth('school-get'), getAllSchools);
router.get('/school/students', auth('school-students'), getStudents);

export default router;