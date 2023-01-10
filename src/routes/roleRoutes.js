import express from 'express';
import { createRole, getAllRoles } from '../controllers/roleControllers.js'
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', auth('no scope needed'), createRole);
router.get('/', auth('role-get'), getAllRoles);

export default router;
