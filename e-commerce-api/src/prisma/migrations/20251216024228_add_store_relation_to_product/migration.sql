-- CreateTable
CREATE TABLE "_ProductToStore" (
    "A" INTEGER NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_ProductToStore_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProductToStore_B_index" ON "_ProductToStore"("B");

-- AddForeignKey
ALTER TABLE "_ProductToStore" ADD CONSTRAINT "_ProductToStore_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToStore" ADD CONSTRAINT "_ProductToStore_B_fkey" FOREIGN KEY ("B") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;
