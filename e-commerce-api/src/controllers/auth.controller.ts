import type { Request, Response } from 'express';
import * as authService from '../services/auth.service';

/* REGISTER */
export const register = async (req: Request, res: Response) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

/* LOGIN */
export const login = async (req: Request, res: Response) => {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

/* DEV LOGIN */
export const devLogin = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const result = await authService.devLogin(email);
    res.json(result);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
