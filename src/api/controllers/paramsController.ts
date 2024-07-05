import { Request, Response } from "express";
import params from "../services/paramsService";

const approveTransaction = async (req: Request, res: Response) => {
  const queryParams = {
    spender: req?.query?.spender,
    tokenAddress: req?.query?.tokenAddress,
    amount: req?.query?.amount,
  };

  try {
    const data = await params.approveTransaction(queryParams);
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the quote" });
  }
};

const paramsController = {
  approveTransaction,
};
export default paramsController;
