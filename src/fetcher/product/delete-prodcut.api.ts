import { API_URL } from "../../lib/setting";

const deleteProductApi = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Delete product failed:", error);
    throw error;
  }
};

export default deleteProductApi;
