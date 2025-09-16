import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import type { ICreateUser } from "../entities/user.entity";
import { useCreateUserContext } from "../hooks/useCreateUserContext";
import { SubTitle } from "./SubTitle";

export function SignInComponent() {
  const { createUser } = useCreateUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data: ICreateUser = {
      email,
      password,
    };

    setEmail("");
    setPassword("");
    createUser(data);
  };

  return (
    <div className="bg-amber-50 py-5 w-130 m-auto rounded-3xl">
      <SubTitle>Sign In</SubTitle>
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
          <Link to="/signUp">Don't have an account yet? Sign Up</Link>
        </div>
      </form>
    </div>
  );
}
