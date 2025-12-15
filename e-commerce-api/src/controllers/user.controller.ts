import type { Request, Response } from 'express';
import * as UserService from '../services/user.service';

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await UserService.getUserById(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const user = await UserService.createUser(req.body);
  res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await UserService.updateUser(id, req.body);
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await UserService.deleteUser(id);
  res.json(user);
};
