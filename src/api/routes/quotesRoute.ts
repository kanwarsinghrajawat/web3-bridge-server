import express from "express";
import axios from "axios";
import quotesController from "../controllers/quotesController";

const router = express.Router();

router.post("/quotes", quotesController.quotes);

export default router;
