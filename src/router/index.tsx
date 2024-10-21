import { FC, PropsWithChildren } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../page/home.page";
import LoginPage from "../page/login.page";
import NotFound from "../page/not-found.page";
import SignUpPage from "../page/sign-up.page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/sign-up",
    element: <SignUpPage />,
  },

  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/*",
    element: <NotFound />,
  },
]);

const IndexRouter: FC<PropsWithChildren<{}>> = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default IndexRouter;
