import "./App.css";
import Button from "./Button.js";
import { useState, useRef } from "react";

const App = () => {
  const [prevSum, setPrevSum] = useState(0);
  const [currentSum, setCurrentSum] = useState(0);
  const [operation, setOperation] = useState("");
  const [total, setTotal] = useState(0);
  const [currentFunc, setCurrentFunc] = useState("");
  const prevFunc = useRef("");

  const digits = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const operations = [
    "add",
    "subtract",
    "multiply",
    "divide",
    "equals",
    "decimal",
    "clear",
  ];
  const digitsMap = new Map();
  digits.map((digit, index) => digitsMap.set(digit, index));

  const operationsMap = new Map();
  operationsMap.set("add", "+");
  operationsMap.set("subtract", "-");
  operationsMap.set("multiply", "*");
  operationsMap.set("divide", "/");
  operationsMap.set("equals", "=");
  operationsMap.set("decimal", ".");
  operationsMap.set("clear", "C");

  const handleCalculation = (func) => {
    // console.log(`init prevFunc: ${prevFunc.current}`);
    if (func === "decimal") {
      // setCurrentSum(currentSum.toFixed(1));
      setCurrentSum(currentSum + ".");
    }
    if (func === "clear") {
      setPrevSum(0);
      setCurrentSum(0);
      setTotal(0);
      setOperation(func);
      console.log("cleared");
      // } else if (func === "add") {
    } else if (
      func === "add" ||
      func === "subtract" ||
      func === "multiply" ||
      func === "divide"
    ) {
      prevFunc.current = func;
      setCurrentFunc(func);
      // console.log(`prevFunc: ${prevFunc.current}`);
      setPrevSum(currentSum);
      setCurrentSum(0);
      setOperation(func);
      // calcTotal(prevSum, func);
      console.log(`${func} clicked`);
    } else if (func === "equals") {
      console.log(`prevFunc:  ${prevFunc}`);
      handleEqualsPress(currentFunc);
      // setTotal(calcTotal(prevSum, prevFunc.current));
      // setOperation(func);
      // console.log("equals");
      setCurrentSum(0);
    } else {
      setOperation(func);
      console.log(`${func} selected`);
    }
  };

  const handleEqualsPress = (func) => {
    if (func === "add") {
      console.log(parseFloat(prevSum) + parseFloat(currentSum));
      setTotal(parseFloat(prevSum) + parseFloat(currentSum));
    } else if (func === "subtract") {
      console.log(parseFloat(prevSum) - parseFloat(currentSum));
      setTotal(parseFloat(prevSum) - parseFloat(currentSum));
    } else if (func === "multiply") {
      console.log(parseFloat(prevSum) * parseFloat(currentSum));
      setTotal(parseFloat(prevSum) * parseFloat(currentSum));
    } else if (func === "divide") {
      console.log(parseFloat(prevSum) / parseFloat(currentSum));
      setTotal(parseFloat(prevSum) / parseFloat(currentSum));
    }
  };
  return (
    <div className="App">
      <div className="App-header">
        {digits.map((digit, index) => (
          <div
            onClick={() => {
              // // setClick(true);
              // if (currentSum === 0) {
              //   setCurrentSum(index);
              //   // setClick(false);
              // } else {
              //   setCurrentSum(currentSum * 10 + index);
              //   // setClick(false);
              // }
              if (currentSum === 0) {
                setCurrentSum(index);
              } else {
                if (currentSum.toString().includes(".")) {
                  setCurrentSum(currentSum + index);
                } else {
                  setCurrentSum(currentSum * 10 + index);
                }
              }
            }}
            key={index}
          >
            <Button name={digit} number={index} key={digit}></Button>
          </div>
        ))}
        <Button name={"equals"} symbol="="></Button>
        <div>
          {operations.map((func) => (
            <div onClick={() => handleCalculation(func)} key={func}>
              <Button
                name={func}
                symbol={operationsMap.get(func)}
                key={func}
              ></Button>
            </div>
          ))}
          <div id="display">
            <p>Previous sum:{prevSum}</p>
            <p id="display">Current Sum:{currentSum}</p>
            <p>Operation:{operation}</p>
            <p>Total: {total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
