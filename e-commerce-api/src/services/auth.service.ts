import prisma from '../prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret_kunci_rahasia';

/* =========================
   REGISTER (REAL)
========================= */
export const register = async (data: {
  name: string;
  email: string;
  password: string;
  role?: string;
}) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    throw new Error('Email sudah terdaftar');
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role || 'USER',
    },
  });
};

/* =========================
   LOGIN (REAL)
========================= */
export const login = async (data: { email: string; password: string }) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user) {
    throw new Error('Email atau Password salah');
  }

  const isValid = await bcrypt.compare(data.password, user.password);
  if (!isValid) {
    throw new Error('Email atau Password salah');
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { user, token };
};

/* =========================
   DEV LOGIN (NO PASSWORD)
========================= */
export const devLogin = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('User tidak ditemukan');
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { user, token };
};
