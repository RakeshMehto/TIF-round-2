import express from 'express';
import { createRole, getAllRoles } from '../controllers/roleControllers.js'
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/role', auth('no scope needed'), createRole);
router.get('/role', auth('role-get'), getAllRoles);

export default router;
