import Link from "next/link";
import type { NextPage } from "next";
import Popup from "reactjs-popup";
// ("use client");

import React, { FC } from "react";

// const Card: FC = () => {
//   return <h3>text</h3>;
// };

const Dashboard: NextPage = () => {
  return (
    <div>
      <div className="m-32"></div>
      <div className="flex">
        <div className="flex-none w-20"></div>
        <button
          className="flex-none w-10 h-10 text-center border-2 "
          // onClick={Card}
        >
          +
        </button>
        <h1 className="flex-auto w-50 text-center justify-center h-10">
          Group {/* PLACEHOLDER */}
        </h1>
      </div>
      <div className="flex-auto "></div>
    </div>
  );
};

export default Dashboard;
