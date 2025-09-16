import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateUserPage } from "./users/pages/SignUpPage";
import { Root } from "./users/pages/Root";
import { SignInPage } from "./users/pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/signUp",
        element: <CreateUserPage />,
      },
      {
        path: "/signIn",
        element: <SignInPage />,
      },
    ],
  },
]);

export function App() {
  return (
    <main className="bg-gray-200 pb-20">
      <RouterProvider router={router} />
    </main>
  );
}
