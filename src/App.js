import "./App.css";
import Button from "./Button.js";
import { useState } from "react";

const App = () => {
  const [prevSum, setPrevSum] = useState(0);
  const [currentSum, setCurrentSum] = useState(0);
  const [operation, setOperation] = useState("");
  const [total, setTotal] = useState(0);
  // const [click, setClick] = useState(false);

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

  //think about using map for digits as well
  // const handleDigit = (digit) => {
  //   if (currentSum === 0) {
  //     setCurrentSum({ currentSum: digitsMap.get(digit) });
  //   } else {
  //     setCurrentSum({
  //       currentSum: digitsMap.get(digit) * 10 + digitsMap.get(digit),
  //     });
  //   }
  // };
  // const handleDigit = (digit) => {
  //   currentSum === 0
  //     ? setCurrentSum(digitsMap.get(digit))
  //     : setCurrentSum(digitsMap.get(digit) * 10 + digitsMap.get(digit));
  //   console.log(currentSum);
  //   console.log("clicked");
  // };
  const handleCalculation = (func) => {
    if (func === "clear") {
      setCurrentSum(0);
      setOperation(func);
      console.log("cleared");
    } else {
      setOperation(func);
    }
  };
  return (
    <div className="App">
      <div className="App-header">
        {digits.map((digit, index) => (
          <div
            onClick={() => {
              // setClick(true);
              if (currentSum === 0) {
                setCurrentSum(index);
                // setClick(false);
              } else {
                setCurrentSum(currentSum * 10 + index);
                // setClick(false);
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
            <div
              // onClick={() => {
              //   // console.log(`click: ${click}`);
              //   // setClick(true);
              //   // console.log(`click?:${click} operation:${operation}`);

              //   if (func === "clear") {
              //     setCurrentSum(0);
              //     setOperation(func);
              //     console.log("cleared");
              //   } else {
              //     setOperation(func);
              //   }
              //   // console.log(`click:${click}`);
              // }}
              onClick={handleCalculation(func)}
              key={func}
            >
              <Button
                name={func}
                symbol={operationsMap.get(func)}
                key={func}
              ></Button>
            </div>
          ))}
          <div id="display">
            Current Sum:{currentSum} Operation:{operation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
