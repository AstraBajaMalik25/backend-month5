import type { Request, Response } from 'express';
import * as ProfileService from '../services/profile.service';
import { asyncHandler } from '../utils/async.handler';
import { successResponse } from '../utils/response';

/**
 * CREATE PROFILE (1 user = 1 profile)
 */
export const createProfile = asyncHandler(async (req: { user: any; body: { fullName: any; }; file: { filename: any; }; }, res: Response<any, Record<string, any>>) => {
  const userId = req.user!.id;

  if (!req.body.fullName) {
    return res.status(400).json({
      success: false,
      message: 'fullName wajib diisi'
    });
  }

  const imageUrl = req.file
    ? `/uploads/${req.file.filename}`
    : null;

  const profile = await ProfileService.createProfile(userId, {
    ...req.body,
    image: imageUrl
  });

  return successResponse(res, 'Profile berhasil dibuat', profile, null, 201);
});
/**
 * GET MY PROFILE
 */
export const getMyProfile = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userId = req.user.id;

  const profile = await ProfileService.getMyProfile(userId);

  return successResponse(res, 'Profile ditemukan', profile);
});

/**
 * UPDATE MY PROFILE
 */
export const updateProfile = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userId = req.user.id;

  const profile = await ProfileService.updateProfile(userId, req.body);

  return successResponse(res, 'Profile berhasil diupdate', profile);
});
