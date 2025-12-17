/*
  Warnings:

  - Added the required column `gender` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "image" TEXT;
