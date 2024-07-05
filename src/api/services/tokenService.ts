import axios from "axios";
import { fetchRecommendedUrl } from "../constants/api";
async function fetchRecommendedTokens() {
  try {
    const response = await axios.get(fetchRecommendedUrl);
    return response.data.recommendedTokens;
  } catch (error) {
    console.error("Error fetching recommended tokens:", error);
    throw error;
  }
}

const tokenService = {
  fetchRecommendedTokens,
};

export default tokenService;
