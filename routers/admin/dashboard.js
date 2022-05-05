import express from 'express';
import dashboard_admin from '../../controllers/dashboard_admin.js';
const router = express.Router();

router.get('/',dashboard_admin.read);

export default router;