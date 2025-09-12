import { useState, type ChangeEvent, type FormEvent } from "react";
import { useCreateUserContext } from "../hooks/useCreateUserContext";
import { Header } from "./Header";
import type { ICreateUser } from "../entities/user.entity";

export function CreateUserForm() {
  const { createUser } = useCreateUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("The passwords must match");
      return;
    }

    const data: ICreateUser = {
      email,
      password,
    };

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    createUser(data);
  };

  return (
    <div className="bg-amber-50 py-5 w-130 m-auto rounded-3xl">
      <Header>Sign Up</Header>
      <form onSubmit={handleSubmit} className="mt-10 px-5">
        <div>
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            className="border-2 border-gray-200 bg-gray-50 rounded-xl py-5 px-3 w-full mb-5 text-xl font-medium text-gray-500"
          />
        </div>

        <div>
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
            className="border-2 border-gray-200 bg-gray-50 rounded-xl py-5 px-3 w-full mb-5 text-xl font-medium text-gray-500"
          />
        </div>

        <div>
          {/* <label htmlFor="confirm-password">Confirm Password</label> */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="border-2 border-gray-200 bg-gray-50 rounded-xl py-5 px-3 w-full mb-5 text-xl font-medium text-gray-500"
          />
          <div className="flex justify-between text-amber-400 font-medium text-xl">
            <a href="#">Forgot password</a>
            <a href="#">Forgot email</a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full my-5 bg-green-700 py-5 rounded-xl text-amber-400 font-medium text-3xl cursor-pointer"
          >
            Subscribe
          </button>
        </div>
        <div className="text-center text-green-700 font-medium text-xl">
          <a href="#">Already have an account? Sign In</a>
        </div>
      </form>
    </div>
  );
}
