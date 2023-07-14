import { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("0");
  const [firstNum, setFirstNum] = useState("")
  const [operator, setOperator] = useState("")
  const handlecalculator =(char) =>{
    if (char === "+"){
      setOperator("+")
      setFirstNum(result);
      setResult("0");
    }
    else if (char === "-"){
      setOperator("-")
      setFirstNum(result);
      setResult("0");
    }
    else if (char === "X"){
      setOperator("X")
      setFirstNum(result);
      setResult("0");
    }
    else if (char === "/"){
      setOperator("/")
      setFirstNum(result);
      setResult("0");
    }
    else if (char === "%"){
      setOperator("%")
      setFirstNum(result);
      setResult("0");
    }
    else if (char === "+/-"){
     if (result === "0"){
      setResult(char);
     } else {
      if (result.includes("-")) return setResult(result.replace("-",""));
      return setResult("-" + result);
     }
    }
    else if (char === "="){
      const secondNum = result;
      if (operator === "+") {
        const total = +firstNum + +secondNum;
        setResult(total.toFixed(0));
      }
      if (operator === "-") {
        const total = +firstNum - +secondNum;
        setResult(total.toFixed(0));
      } 
      if (operator === "X") {
        const total = +firstNum * +secondNum;
        setResult(total.toFixed(0));
      }
      if (operator === "/") {
        const total = +firstNum / +secondNum;
        setResult(total.toFixed(0));
      }
      if (operator === "%") {
        const total = +firstNum % +secondNum;
        setResult(total.toFixed(0));
      }
    }
     
     if ( char === "1"){
      if(result === "0"){
        setResult(char);
      } else{
        setResult (result + char);
      }
    }
    if ( char === "2"){
      if(result === "0"){
        setResult(char);
      } else{
        setResult (result + char);
      }
    }
    if ( char === "3"){
      if(result === "0"){
        setResult(char);
      } else{
        setResult (result + char);
      }
    }
    if ( char === "4"){
      if(result === "0"){
        setResult(char);
      } else{
        setResult (result + char);
      }
    }
    if ( char === "5"){
      if(result === "0"){
        setResult(char);
      } else{
        setResult (result + char);
      }
    }
    if ( char === "6"){
      if(result === "0"){
        setResult(char);
      } else{
        setResult (result + char);
      }
    }
    if ( char === "7"){
      if(result === "0"){
        setResult(char);
      } else{
        setResult (result + char);
      }
    }
    if ( char === "8"){
      if(result === "0"){
        setResult(char);
      } else{
        setResult (result + char);
      }
    }
    if ( char === "9"){
      if(result === "0"){
        setResult(char);
      } else{
        setResult (result + char);
      }
    }
    if ( char === "0"){
      if(result === "0"){
        setResult(char);
      } else{
        setResult (result + char);
      }
    }
    if ( char === "00"){
      if(result === "0"){
        setResult(char);
      } else{
        setResult (result + char);
      }
    }
    if ( char === "."){
        setResult (result + char);
      }
    if ( char === "C"){
        setResult ("0");
      }
  };

  return <div className="calculator">
  <div className="display">
    <div className="display-content">{result}</div>
    </div> 
    <div className="layout">
      <div onClick={() => {
        handlecalculator("C");
        }} className="normdiv" >C</div>
      <div onClick={() => {
        handlecalculator("+/-");
        }}className="normdiv">+/-</div>
      <div onClick={() => {
        handlecalculator("%");
        }}className="normdiv">%</div>
      <div onClick={() => {
        handlecalculator("/");
      }}className="difdiv normdiv">/</div>
      <div onClick={() => {
        handlecalculator("7");
      }}className=" botdiv normdiv" >7</div>
      <div onClick={() => {
        handlecalculator("8");
      }}className=" botdiv normdiv">8</div>
      <div onClick={() => {
        handlecalculator("9");
      }}className=" botdiv normdiv">9</div>
      <div onClick={() => {
        handlecalculator("X");
      }}className="difdiv normdiv">X</div>
      <div onClick={() => {
        handlecalculator("4");
      }}className=" botdiv normdiv">4</div>
      <div onClick={() => {
        handlecalculator("5");
      }}className=" botdiv normdiv">5</div>
      <div onClick={() => {
        handlecalculator("6");
      }} className="botdiv normdiv">6</div>
      <div onClick={() => {
        handlecalculator("-");
      }}className="difdiv normdiv">-</div>
      <div onClick={() => {
        handlecalculator("1");
      }}
      className=" botdiv normdiv">1</div>
      <div onClick={() => {
        handlecalculator("2");
      }}className=" botdiv normdiv">2</div>
      <div onClick={() => {
        handlecalculator("3");
      }}className=" botdiv normdiv">3</div>
      <div onClick={() => {
        handlecalculator("+");
        }}className="difdiv normdiv">+</div>
      <div onClick={() => {
        handlecalculator("0");
      }}className=" botdiv normdiv">0</div>
      <div onClick={() => {
        handlecalculator("00");
      }}className=" botdiv normdiv">00</div>
      <div onClick={() => {
        handlecalculator(".");
      }}className=" botdiv normdiv">.</div>
      <div onClick={() => {
        handlecalculator("=");
        }}className="difdiv normdiv">=</div>
    </div>
  </div>;
};
export default App;
