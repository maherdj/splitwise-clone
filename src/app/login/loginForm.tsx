import React, { FC } from "react";

import Link from "next/link";

const LoginForm: FC = () => {
  return (
    <div className="p-9">
      <div className="grid place-items-center max-w-lg px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-black">Login</h2>
        <form action="">
          <input
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black"
            type="text"
            placeholder="Username"
          />
          <br></br>
          <input
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black"
            placeholder="Password"
          />
          <br></br>
          <br></br>
          <Link
            href="/dashboard"
            className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black bg-blue-300"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
