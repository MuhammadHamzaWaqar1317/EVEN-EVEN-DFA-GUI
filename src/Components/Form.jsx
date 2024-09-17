import React from "react";
import { showSuccess, showError } from "../utils/toastify";
import { Input, Button, Form as AntdForm } from "antd";
function Form({
  setQ0,
  setQ1,
  setQ2,
  setQ3,
  simulate,
  setSimulate,
  simulationText,
  setSimulationText,
  state,
  setState,
  string,
  setString,
  invalidString,
  setInvalidString,
  regex,
  counter,
  setCounter,
}) {
  const validate = () => {
    let countA = 0;
    let countB = 0;
    let flagA = false;
    let flagB = false;
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) == "a") {
        countA++;
        flagA = true;
      } else {
        countB++;
        flagB = true;
      }
    }
    console.log(countA);
    console.log(countB);

    if (countA % 2 == 0 && countB % 2 == 0) {
      showSuccess(`${string} : Accepted`);
    } else if (countA % 2 == 0 && flagA && countB % 2 != 0) {
      showError(`${string} : Rejected`);
    } else if (countB % 2 == 0 && flagB && countA % 2 != 0) {
      showError(`${string} : Rejected`);
    } else {
      showError(`${string} : Rejected`);
    }
  };

  const handleValidation = () => {
    if (invalidString) {
      return;
    }
    validate();
  };

  const handleSimulation = () => {
    if (invalidString) {
      return;
    }
    setSimulate(true);
  };

  const handleClick = () => {
    if (invalidString) {
      return;
    }

    if (counter == string.length) {
      validate();
      setSimulationText("Simulation Ended");

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
      setSimulationText("Simulation Started");
    };

    const obj = {
      q0: () => change(false, argA, argB, false, q0Change),
      q1: () => change(argA, false, false, argB, q1Change),
      q2: () => change(argB, false, false, argA, q2Change),
      q3: () => change(false, argB, argA, false, q3Change),
    };

    obj[state]();
    setCounter((prev) => prev + 1);
    if (counter + 1 == string.length) {
      validate();
      setSimulationText("Simulation Ended");

      return;
    }
    console.log("String: ", string.charAt(0) == "a");
  };

  const handleReset = () => {
    setSimulationText("Simulation Reset Successfully");
    setCounter(0);
    setState("q0");
    setQ0(true);
    setQ1(false);
    setQ2(false);
    setQ3(false);
  };

  const handleChange = (e) => {
    setString(e.target.value.toLowerCase());
    setInvalidString(!regex.test(e.target.value.toLowerCase()));
    handleReset();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-3 items-center">
        <AntdForm>
          <AntdForm.Item
            name="username"
            style={{ margin: "0px" }}
            rules={[
              {
                required: true,
                pattern: regex,
                message: "Please enter string containg a or b",
              },
            ]}
          >
            <Input
              allowClear={true}
              placeholder="Enter String"
              onChange={handleChange}
              value={string}
            />
          </AntdForm.Item>
        </AntdForm>
        <Button type="primary" onClick={handleValidation}>
          Validate
        </Button>
        <Button type="primary" onClick={handleSimulation}>
          Simulate
        </Button>
      </div>
      {simulate && <p>{simulationText}</p>}

      <div className="">
        <div className="flex gap-3">
          {simulate && (
            <Button type="primary" onClick={handleReset}>
              Reset
            </Button>
          )}
          {simulate && (
            <Button type="primary" onClick={handleClick}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
