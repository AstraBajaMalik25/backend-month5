import prisma from "../prisma";

export const createProfile = async (userId: number, data: any) => {
  return prisma.profile.create({
    data: {
      userId,
      fullName: data.fullName,
      phone: data.phone,
      address: data.address,
      gender: data.gender,
      image: data.image
    }
  });
};

export const getMyProfile = async (userId: number) => {
  return prisma.profile.findUnique({
    where: { userId },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          role: true
        }
      }
    }
  });
};

export const updateProfile = async (userId: number, data: any) => {
  return prisma.profile.update({
    where: { userId },
    data
  });
};
