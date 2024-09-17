import React from "react";
import State from "./State";

import img from "../assets/Capture.jpg";
import img2 from "../assets/imgb.jpg";
function DFA({ q0, q1, q2, q3 }) {
  return (
    <>
      <div className="w-[500px] flex flex-row flex-wrap gap-y-[253px] justify-center items-center relative">
        <State state={q0} name={"q0"} initial={true} />
        <img src={img} alt="" />
        <State state={q1} name={"q1"} />
        <img src={img2} alt="" className="pic-right" />
        <img src={img2} alt="" className="pic-left" />
        <State state={q2} name={"q2"} />
        <img src={img} alt="" />
        <State state={q3} name={"q3"} />
      </div>
    </>
  );
}

export default DFA;
