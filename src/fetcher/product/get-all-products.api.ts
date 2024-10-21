import { API_URL } from "../../lib/setting";

const getAllProductsApi = async ({ pageParam = 1 }) => {
  try {
    const response = await fetch(
      `${API_URL}/products?_page=${pageParam}&_per_page=9`
    );
    const data = await response.json();

    console.log("incoming data", { data, pageParam });

    return {
      products: data.data,
      nextPage: data.next,
    };
  } catch (error) {
    console.error("Get all products failed:", error);
    throw error;
  }
};

export default getAllProductsApi;
