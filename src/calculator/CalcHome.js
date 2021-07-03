import "./calcstyle.css";

import Button from "./Button";
import { useState, useEffect } from "react";

const CalcHome = () => {
  const contents = [
    { text: "AC", type: "function" },
    { text: "±", type: "function" },
    { text: "%", type: "function" },
    { text: "÷", type: "operator" },
    { text: "7", type: "num" },
    { text: "8", type: "num" },
    { text: "9", type: "num" },
    { text: "×", type: "operator" },
    { text: "4", type: "num" },
    { text: "5", type: "num" },
    { text: "6", type: "num" },
    { text: "-", type: "operator" },
    { text: "1", type: "num" },
    { text: "2", type: "num" },
    { text: "3", type: "num" },
    { text: "+", type: "operator" },
    { text: "0", type: "num" },
    { text: ".", type: "dp" },
    { text: "=", type: "operator" },
  ];
  //states
  const [time, setTime] = useState(new Date());
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  // effect
  useEffect(() => {
    let timerId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  //functions
  const calculate = () => {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "−") {
        setMemory(memory - parseFloat(value));
      } else if (operator === "×") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "÷") {
        setMemory(memory / parseFloat(value));
      }
    } else {
      setMemory(parseFloat(value));
    }
  };

  //handlers
  const clickHandler = (content) => {
    // console.log(content);
    let num = parseFloat(value);
    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }
    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }
    if (content === "%") {
      setValue((num / 100).toString());
      // setMemory(null);
      // setOperator(null);
      // calculate();
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (content === "+") {
      calculate();
      setValue("0");
      setOperator("+");
      return;
    }
    if (content === "-") {
      calculate();
      setValue("0");
      setOperator("-");
      return;
    }
    if (content === "×") {
      calculate();
      setValue("0");
      setOperator("×");
      return;
    }
    if (content === "÷") {
      calculate();
      setValue("0");
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (!operator) return;
      //addition
      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "-") {
        console.log(memory - value);
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue(
          (memory / parseFloat(value)).toFixed(4).toString()
        );
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else setValue((num + content).toString());
  };

  return (
    <div className='container'>
      <h2 className='project-title'>Calculator</h2>
      <div className='App'>
        <div className='top'>
          <div className='time'>{time.toLocaleTimeString()}</div>
          <div className='menu'>
            {memory} ---- {operator}
          </div>
        </div>
        <div className='display'>{value}</div>
        <div className='buttons'>
          {contents.map((content, i) => (
            <Button
              clickHandler={clickHandler}
              content={content.text}
              type={content.type}
              key={i}
            />
          ))}
        </div>
        <div className='bottom' />
      </div>
    </div>
  );
};

export default CalcHome;
