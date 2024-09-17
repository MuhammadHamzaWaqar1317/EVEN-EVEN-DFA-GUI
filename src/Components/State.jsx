import React from "react";
import { FaPlusMinus } from "react-icons/fa6";
function State({ state, name, initial }) {
  return (
    <div
      id={name}
      className={`h-[100px] w-[100px] border-black border-2 ${
        state && "bg-blue-500 text-white"
      } circle rounded-full flex justify-center items-center`}
    >
      {initial ? (
        <div className="h-[90%] w-[90%] flex justify-center items-center">
          <FaPlusMinus color={`${state ? "white" : "black"} `} />

          <div>{name}</div>
        </div>
      ) : (
        <div className="">{name}</div>
      )}
    </div>
  );
}

export default State;
