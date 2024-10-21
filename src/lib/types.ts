export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface User {
  email: string;
  username: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
