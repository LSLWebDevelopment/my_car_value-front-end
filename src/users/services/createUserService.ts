import axios from "axios";
import type { ICreateUser } from "../entities/user.entity";

const url = import.meta.env.VITE_API_URL;

export interface ICreateUserResponse {
  id: number;
  email: string;
  password: string;
}

export async function createUserService({
  email,
  password,
}: ICreateUser): Promise<ICreateUserResponse> {
  const response = await axios.post<ICreateUserResponse>(`${url}/auth/signup`, {
    email,
    password,
  });
  return response.data;
}
