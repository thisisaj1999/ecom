
import axios from "axios";
const inProduction = false;

const BaseURL = inProduction ? `` : `http://127.0.0.1:8000`

const Endpoints = {

  // User
  GET_USER : ``,

  // Items
  GET_ALL_ITEMS : `${BaseURL}/all/items/`,
  GET_ITEM : `${BaseURL}/all/items/`
}

const getAllItems = async () => {
  try {
    const response = await axios.get(Endpoints.GET_ALL_ITEMS);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}



export { Endpoints, getAllItems };