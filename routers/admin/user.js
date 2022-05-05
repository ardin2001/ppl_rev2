import express from 'express';
import user_admin from '../../controllers/user_admin.js';
const router = express.Router();

router.get('/',user_admin.read) 

export default router;