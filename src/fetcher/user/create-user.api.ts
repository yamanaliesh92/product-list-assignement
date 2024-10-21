import { API_URL } from "../../lib/setting";
import { User } from "../../lib/types";

const createUserApi = async (data: User): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error("Create user  failed:", error);
    throw error;
  }
};

export default createUserApi;
