import express from "express";
import axios from "axios";
import paramsController from "../controllers/paramsController";

const router = express.Router();

router.post("/params", paramsController.approveTransaction);

export default router;
