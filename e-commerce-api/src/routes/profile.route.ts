import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { upload } from '../middlewares/upload.middleware';
import {
  createProfile,
  getMyProfile,
  updateProfile
} from '../controllers/profile.controller';

const router = Router();

router.post(
  '/profile',
  authenticate,
  upload.single('image'), // 🔥 INI WAJIB
  createProfile
);

router.get('/profile/me', authenticate, getMyProfile);
router.put(
  '/profile',
  authenticate,
  upload.single('image'),
  updateProfile
);

export default router;
