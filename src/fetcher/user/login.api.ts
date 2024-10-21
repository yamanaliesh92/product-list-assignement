import { API_URL } from "../../lib/setting";
import { LoginPayload, User } from "../../lib/types";

const loginApi = async (data: LoginPayload): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();

    const user = users.find(
      (user: { email: string; password: string }) =>
        user.email === data.email && user.password === data.password
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    return user;
  } catch (error) {
    console.error("Login user  failed:", error);
    throw error;
  }
};

export default loginApi;
