import prisma from '../prisma';

export const getAllUsers = async () => {
  return prisma.user.findMany({
    where: { deletedAt: null },
  });
};

export const getUserById = async (id: number) => {
  return prisma.user.findFirst({
    where: { id, deletedAt: null },
  });
};

export const createUser = async (data: {
  username: string;
  email: string;
}) => {
  return prisma.user.create({
    data,
  });
};

export const updateUser = async (id: number, data: {
  username?: string;
  email?: string;
}) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

export const deleteUser = async (id: number) => {
  return prisma.user.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};