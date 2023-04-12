import { useState } from 'react'
import { UpdateCalc } from './components/updateCalc'
import HistoryCalc from './components/historyCalc'

let historyArray = []
let lastCalculate = false

function App() {
const [secretCalc, setSecretCalc] = useState("");
const [calc, setCalcu] = useState("");
const [historyCalc1, setHistoryCalc] = useState("")
const [result, setResult] = useState("")
const [resultHistory, setResultHistory] = useState("")

const createDigits = () => {
  const digits = [];

  for (let i = 1; i < 10; i++) {
    digits.push(
      <button  
       onClick={() => UpdateCalc(i.toString(), secretCalc, calc, setSecretCalc, setCalcu)}
       key={i}>
       {i}
       </button>
    )
  }
    return digits
}


const calculate = () => {
  if (calc !== "") {
for (let i = 0; i < 1; i++) {
  setHistoryCalc(calc)
  setResult(eval(secretCalc).toString())
  setCalcu(eval(secretCalc).toString())
  setSecretCalc(calc)
  deleteLast()
  return lastCalculate = true
}}  else {
  throw new Error("Put in a number dummy")
}}

const deleteLast = () => {
  if (calc === '') {
    return
  }

  setCalcu('');
  setSecretCalc('')
}

if (lastCalculate === true) {
historyArray.push(<h3>{historyCalc1} = {result}</h3>)
lastCalculate = false
}

  return (
    <div className="App">
      <div className="calculator">
        <HistoryCalc history={historyArray}/>
        <div className='display'><span>({result  || 0})</span>
          &nbsp;
          { calc  ||  "0"}
        </div>

        <div className="operators">
          <button onClick={() => UpdateCalc('^2', secretCalc, calc, setSecretCalc, setCalcu)}> ^2 </button>
          <button onClick={() => UpdateCalc('√', secretCalc, calc, setSecretCalc, setCalcu)}> √ </button>
          <button onClick={() => UpdateCalc('/', secretCalc, calc, setSecretCalc, setCalcu)}> / </button>
          <button onClick={() => UpdateCalc('*', secretCalc, calc, setSecretCalc, setCalcu)}> * </button>
          <button onClick={() => UpdateCalc('+', secretCalc, calc, setSecretCalc, setCalcu)}> + </button>
          <button onClick={() => UpdateCalc('-', secretCalc, calc, setSecretCalc, setCalcu)}> - </button>

          <button onClick={deleteLast}> DEL </button>
        </div>

        <div className="digits">
          { createDigits() }
          <button onClick={() => UpdateCalc('0', secretCalc, calc, setSecretCalc, setCalcu)}>0</button>
          <button onClick={() => UpdateCalc('.', secretCalc, calc, setSecretCalc, setCalcu)}>.</button>
          
          <button onClick={() => {calculate()}}>=</button>
        </div>
      </div>
    </div>
  );
  }

export default App;
