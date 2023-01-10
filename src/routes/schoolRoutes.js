import express from 'express';
import { createSchool, getAllSchools, getStudents } from '../controllers/schoolControllers.js'
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', auth('school-create'), createSchool);
router.get('/', auth('school-get'), getAllSchools);
router.get('/students', auth('school-students'), getStudents);

export default router;
