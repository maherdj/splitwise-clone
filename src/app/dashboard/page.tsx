"use client";

import Link from "next/link";
import type { NextPage } from "next";
import Popup from "reactjs-popup";

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
        <Popup
          trigger={
            <button className="flex-none w-10 h-10 text-center border-2 ">
              {" "}
              +{" "}
            </button>
          }
          modal
          nested
        >
          {/* (close () = ( */}
          <div className="max-w-fit max-h-fit border wind">
            {/* test */}
            <div className="flex-auto px-4 py-2">
              <div>test</div>
              <input
                className="flex_auto  text-black "
                placeholder="test"
              ></input>
            </div>

            <button onClick={() => close()}>Close</button>
          </div>
        </Popup>
        <h1 className="flex-auto w-50 text-center justify-center h-10">
          Group {/* PLACEHOLDER */}
        </h1>
      </div>
      <div className="flex-auto "></div>
    </div>
  );
};

export default Dashboard;
