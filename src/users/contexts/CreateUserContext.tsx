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

export const CreateUserContext = createContext<ICreateUserContext | null>(null);

export function CreateUserProvider({ children }: CreateUserProviderProps) {
  const createUser = async (data: ICreateUser) => {
    try {
      const response = await createUserService(data);
      console.log(response);
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
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
