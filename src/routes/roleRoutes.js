import express from 'express';
import { createRole, getAllRoles } from '../controllers/roleControllers'
import { auth } from '../middlewares/auth';

const router = express.Router();

router.post('/role', auth('no scope needed'), createRole);
router.get('/role', auth('role-get'), getAllRoles);

export default router;
