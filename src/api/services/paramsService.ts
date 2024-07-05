import axios from "axios";
import { approveTRansaction } from "../constants/api";

const approveTransaction = async (queryParams: any) => {
  try {
    const response = await axios.get(approveTRansaction, {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching quote:", error);
    throw error;
  }
};

const params = {
  approveTransaction,
};
export default params;
