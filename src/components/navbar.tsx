import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./button";

const Navbar = () => {
  const getUsername = localStorage.getItem("name");
  const username = getUsername ? JSON.parse(getUsername) : null;
  return (
    <header className="p-4 border mb-14 border-b-2 border-b-gray-200   w-full ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-2xl uppercase">
            xk
            <span className="text-primary">shop</span>
          </span>
        </div>
        {username ? (
          <span className="text-black">Welcome, {username}</span>
        ) : (
          <Link to={"/login"}>
            <CustomButton width={"auto"}>Login</CustomButton>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
