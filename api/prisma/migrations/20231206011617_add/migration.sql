/*
  Warnings:

  - Added the required column `isCompleted` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "isCompleted" BOOLEAN NOT NULL;
