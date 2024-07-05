import axios from "axios";
import { getQuoteUrl } from "../constants/api";

const getQuote = async (queryParams: any) => {
  try {
    const response = await axios.get(getQuoteUrl, { params: queryParams });
    return response.data;
  } catch (error) {
    console.error("Error fetching Transactions:", error);
    throw error;
  }
};

const quotes = {
  getQuote,
};
export default quotes;
