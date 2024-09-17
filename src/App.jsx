import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import DFA from "./Components/DFA";
import Form from "./Components/Form";

function App() {
  const [simulate, setSimulate] = useState(false);
  const [simulationText, setSimulationText] = useState("Simulation Started");

  const [counter, setCounter] = useState(0);
  const [string, setString] = useState("");
  const [invalidString, setInvalidString] = useState(true);

  const [state, setState] = useState("q0");
  const [q0, setQ0] = useState(true);
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const regex = new RegExp(/^[AaBb]+$/);

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center flex-col gap-3 min-w-[600px] ">
        <Form
          setQ0={setQ0}
          setQ1={setQ1}
          setQ2={setQ2}
          setQ3={setQ3}
          simulate={simulate}
          setSimulate={setSimulate}
          string={string}
          setString={setString}
          invalidString={invalidString}
          setInvalidString={setInvalidString}
          simulationText={simulationText}
          setSimulationText={setSimulationText}
          state={state}
          setState={setState}
          regex={regex}
          counter={counter}
          setCounter={setCounter}
        />

        <DFA q0={q0} q1={q1} q2={q2} q3={q3} />
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
