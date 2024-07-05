import { Request, Response } from "express";
import axios from "axios";
import tokenService from "../services/tokenService";

const getAllRecommendedTokens = async (req: Request, res: Response) => {
  const { chainId } = req.query;

  if (!chainId) return res.sendStatus(404);

  const parsedChainId = parseInt(chainId as string);

  if (isNaN(parsedChainId)) {
    return res.status(400).json({ error: "Invalid chainId" });
  }

  try {
    const recommendedTokens = await tokenService.fetchRecommendedTokens();

    const filteredTokens = recommendedTokens.filter((token: any) => {
      return token.chainId === parsedChainId;
    });
    res.status(200).json(filteredTokens);
  } catch (error) {
    console.error("Error fetching and filtering tokens:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const tokensController = {
  getAllRecommendedTokens,
};

export default tokensController;
