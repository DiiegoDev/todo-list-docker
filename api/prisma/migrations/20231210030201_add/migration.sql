/*
  Warnings:

  - Added the required column `updateAt` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;
