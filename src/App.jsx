import { useState } from "react";
import Arrow, { DIRECTION } from "react-arrows";
import reactLogo from "./assets/react.svg";
import { ArcherContainer, ArcherElement } from "react-archer";
import img from "./assets/Capture.jpg";
import img2 from "./assets/imgb.jpg";
import viteLogo from "/vite.svg";
import "./App.css";
import Xarrow from "react-xarrows";

function App() {
  const [counter, setCounter] = useState(0);
  const [string, setString] = useState("aaabba");
  const [state, setState] = useState("q0");
  const [q0, setQ0] = useState(true);
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const handleClick = () => {
    if (counter == string.length) {
      return;
    }

    const argA = string.charAt(counter) == "a" ? true : false;
    const argB = !argA;
    console.log("argA: ", argA);
    console.log("argB: ", argB);

    const q0Change = string.charAt(counter) == "a" ? "q1" : "q2";
    const q1Change = string.charAt(counter) == "a" ? "q0" : "q3";
    const q2Change = string.charAt(counter) == "a" ? "q3" : "q0";
    const q3Change = string.charAt(counter) == "a" ? "q2" : "q1";

    const change = (q0, q1, q2, q3, newState) => {
      console.log("q0: ", q0);
      console.log("q1: ", q1);
      console.log("q2: ", q2);
      console.log("q3: ", q3);
      console.log("newState", newState);

      setQ0(q0);
      setQ1(q1);
      setQ2(q2);
      setQ3(q3);
      setState(newState);
    };

    const obj = {
      q0: () => change(false, argA, argB, false, q0Change),
      q1: () => change(argA, false, false, argB, q1Change),
      q2: () => change(argB, false, false, argA, q2Change),
      q3: () => change(false, argB, argA, false, q3Change),
    };

    obj[state]();
    setCounter((prev) => prev + 1);

    console.log("String: ", string.charAt(0) == "a");
  };

  console.log(state);

  return (
    <>
      <ArcherContainer strokeColor="red" lineStyle="angle">
        <div className="h-screen w-screen flex justify-center items-center min-w-[600px] ">
          <div className="w-[500px] flex flex-row flex-wrap gap-y-[253px] justify-center items-center relative">
            <Circle state={q0} name={"q0"} initial={true} />
            <img src={img} alt="" />
            <Circle state={q1} name={"q1"} />
            <img src={img2} alt="" className="pic-right" />
            <img src={img2} alt="" className="pic-left" />
            <Circle state={q2} name={"q2"} />
            <img src={img} alt="" />
            <Circle state={q3} name={"q3"} />
          </div>
        </div>
      </ArcherContainer>
      <button onClick={handleClick}>Next</button>
    </>
  );
}

function Circle({ state, name, initial, target1, target, source }) {
  return (
    <>
      <ArcherElement
        id={name}
        relations={[
          {
            targetId: target1,
            targetAnchor: target,
            sourceAnchor: source,
            label: "Arrow 3",
          },
        ]}
      >
        <div
          id={name}
          className={`h-[100px] w-[100px] border-black border-2 ${
            state && "bg-green-900"
          } circle rounded-full flex justify-center items-center`}
        >
          {initial ? (
            <div className="h-[90%] w-[90%] rounded-full border-black border-2 flex justify-center items-center">
              {name}
            </div>
          ) : (
            <div className="">{name}</div>
          )}
        </div>
      </ArcherElement>
    </>
  );
}

export default App;
