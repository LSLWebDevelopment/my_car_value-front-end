import { createContext, type ReactNode } from "react";
import type { ICreateUser } from "../entities/user.entity";
import { createUserService } from "../services/createUserService";
import type { AxiosError } from "axios";

interface ICreateUserContext {
  createUser: (data: ICreateUser) => void;
}

interface CreateUserProviderProps {
  children: ReactNode;
}

interface CreateUserResponse {
  message: string;
}

export const CreateUserContext = createContext<ICreateUserContext | null>(null);

export function CreateUserProvider({ children }: CreateUserProviderProps) {
  const createUser = async (data: ICreateUser) => {
    try {
      const response = await createUserService(data);
      console.log(response);
      alert("User successfully created!");
    } catch (error) {
      const { response } = error as AxiosError<CreateUserResponse>;
      alert(response?.data?.message);
    }
  };

  const dataToShare = {
    createUser,
  };

  return (
    <CreateUserContext.Provider value={dataToShare}>
      {children}
    </CreateUserContext.Provider>
  );
}
