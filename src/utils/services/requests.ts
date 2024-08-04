
import axios from "axios";
const inProduction = false;

const BaseURL = inProduction ? `` : `http://127.0.0.1:8000`

const Endpoints = {

  // User
  GET_USER : ``,

  // Items
  GET_ALL_ITEMS : `${BaseURL}/all/items/`,
  GET_ITEM : `${BaseURL}/all/items/`,
  GET_ITEM_BY_ID : `${BaseURL}/item`
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

const getItemByID = async (item_id: string) => {
  try {
    const response = await axios.get(`${Endpoints.GET_ITEM_BY_ID}/${item_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching item by id:", error);
    throw error;
  }
}



export { Endpoints, getAllItems, getItemByID };