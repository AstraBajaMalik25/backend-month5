import { Router } from "express";
import {
  checkout,
  getTransactionById,
} from "../controllers/transaction.controller";

const router = Router();

router.post("/transactions", checkout);
router.get("/transactions/:id", getTransactionById);

export default router;
