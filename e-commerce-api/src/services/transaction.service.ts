import prisma from "../prisma";

export const checkout = async (
  userId: number,
  items: { productId: number; quantity: number }[]
) => {
  return prisma.$transaction(async (tx) => {
    let total = 0;

    // ⚠️ penting: JANGAN kasih type manual
    const transactionItemsData = [];

    for (const item of items) {
      const product = await tx.product.findUnique({
        where: { id: item.productId },
      });

      if (!product) {
        throw new Error(`Product ID ${item.productId} not found`);
      }

      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for product ${product.name}`);
      }

      total += Number(product.price) * item.quantity;

      transactionItemsData.push({
        productId: item.productId,
        quantity: item.quantity,
        priceAtTime: product.price,
      });

      await tx.product.update({
        where: { id: item.productId },
        data: {
          stock: {
            decrement: item.quantity,
          },
        },
      });
    }

    return tx.transaction.create({
      data: {
        userId,
        total,
        items: {
          create: transactionItemsData,
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  });
};

export const getTransactionById = async (id: number) => {
  return prisma.transaction.findUnique({
    where: { id },
    include: {
      user: true,
      items: {
        include: {
          product: true,
        },
      },
    },
  });
};
