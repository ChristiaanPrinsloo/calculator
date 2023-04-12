import App from '../App.js'
import { lastCalculated } from '../App.js'

let numberArray = []

const UpdateCalc = (value, secretCalc, calc, setSecretCalc, setCalcu) => {

    const ops = ['^2', '√', '/', '*', '+', '-', '.'];

    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return
    }
    
    if (value !== '√') {
    setCalcu(calc + value)
    } else {
    setCalcu(value + calc)
    }

    if (!ops.includes(value)) {
      numberArray.push(value)
    }


     if (value === '^2') {
      setSecretCalc(secretCalc + '*' + numberArray[numberArray.length - 1])
    } else if (value === "√") {
      setSecretCalc(Math.sqrt(eval(secretCalc)))
    } else {
      setSecretCalc(secretCalc + value)
    };

    }
  

export {UpdateCalc}