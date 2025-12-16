import { Router } from "express";
import { checkout, getDetail, } from "../controllers/transaction.controller";
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post("/transactions", checkout);
router.get("/transactions/:id", getDetail);
router.post("/transactions", authenticate, checkout);

export default router;

