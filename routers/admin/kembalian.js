import express from 'express';
import admin_kembalian from './../../controllers/kembalian_admin.js';
const router = express.Router();

router.get('/',admin_kembalian.read);
router.get('/edit/:id',admin_kembalian.edit);

export default router;