/*
  Warnings:

  - The primary key for the `Store` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Store` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `_ProductToStore` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToStore" DROP CONSTRAINT "_ProductToStore_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToStore" DROP CONSTRAINT "_ProductToStore_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "storeId" INTEGER;

-- AlterTable
ALTER TABLE "Store" DROP CONSTRAINT "Store_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Store_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "_ProductToStore";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;
