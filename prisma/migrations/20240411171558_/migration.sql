/*
  Warnings:

  - A unique constraint covering the columns `[recipeId,userId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rating_recipeId_userId_key" ON "Rating"("recipeId", "userId");
