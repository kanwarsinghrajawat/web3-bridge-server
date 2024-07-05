import { Request, Response } from "express";
import quotesService from "../services/quotesService";

const quotes = async (req: Request, res: Response) => {
  const queryParams = {
    srcQuoteTokenAmount: req?.query?.srcQuoteTokenAmount,
    slippage: req?.query?.slippage,
    srcChainId: req?.query?.srcChainId,
    srcQuoteTokenAddress: req?.query?.srcQuoteTokenAddress,
    dstChainId: req?.query?.dstChainId,
    dstQuoteTokenAddress: req?.query?.dstQuoteTokenAddress,
  };

  try {
    const data = await quotesService.getQuote(queryParams);
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the quote" });
  }
};

const quotesController = {
  quotes,
};

export default quotesController;
