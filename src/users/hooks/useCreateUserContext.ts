import { useContext } from "react";
import { CreateUserContext } from "../contexts/CreateUserContext";

export function useCreateUserContext() {
  const context = useContext(CreateUserContext);
  if (!context) {
    throw new Error("Context not created.");
  }
  return context;
}
