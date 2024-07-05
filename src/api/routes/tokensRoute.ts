import express from "express";
import axios from "axios";
import tokensController from "../controllers/tokensController";

const router = express.Router();

router.get("/token", tokensController.getAllRecommendedTokens);

export default router;
