import { API_URL } from "../../lib/setting";
import { Product } from "../../lib/types";

const updateProductApi = async (
  id: number,
  product: Product
): Promise<void> => {
  try {
    await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  } catch (error) {
    console.error("Update product failed:", error);
    throw error;
  }
};
export default updateProductApi;
