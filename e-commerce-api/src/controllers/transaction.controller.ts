import type { Request, Response } from "express";
import * as transactionService from "../services/transaction.service";

export const checkout = async (req: Request, res: Response) => {
  try {
    const { userId, items } = req.body;
    const result = await transactionService.checkout(userId, items);
    res.status(201).json(result);
  } catch (error) {
    console.error("CHECKOUT ERROR 👉", error); // 👈 TAMBAH INI
    res.status(500).json({
      message: "Checkout failed",
      error: String(error),
    });
  }
};

export const getTransactionById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await transactionService.getTransactionById(id);

    if (!result) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json(result);
  } catch {
    res.status(500).json({ message: "Error retrieval" });
  }
};
