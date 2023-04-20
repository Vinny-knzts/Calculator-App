import React, { useState } from 'react'
import './App.css'

function App () {
  const [result, setResult] = useState('0')

  function clearAll () {
    setResult('0')
  }

  function clear () {
    if (result.length === 1) setResult('0')
    else setResult(result.slice(0, -1))
  }

  function add (character) {
    const currentNumber = result.split(/[*+/-]+/).slice(-1)[0]
    if (currentNumber === '0') {
      setResult(result.slice(0, -1) + character)
    } else setResult(result + character)
  }

  function addComma () {
    const currentNumber = result.split(/[*+/-]+/).slice(-1)[0]
    if (!currentNumber.includes('.')) {
      if (currentNumber === '') {
        setResult(result + '0.')
      } else setResult(result + '.')
    }
  }

  function format () {
    const numbers = result.split(/[*+/-]+/)
    const operators = result.split(/[1234567890.]+/).filter(o => o)
    const format = []
    numbers.forEach((number, i) => {
      format.push(number)
      if (i < operators.length) format.push(operators[i])
    })
    return format
  }

  function calculateDivAndMulti () {
    const DivMultiFunctions = {
      '*': (a, b) => a * b,
      '/': (a, b) => a / b
    }
    let formatArray = format()
    for (let i = 0; i < formatArray.length;) {
      if (formatArray[i] === '*' || formatArray[i] === '/') {
        formatArray[i] = DivMultiFunctions[formatArray[i]](formatArray[i - 1], formatArray[i + 1])
        formatArray[i - 1] = null
        formatArray[i + 1] = null
        formatArray = formatArray.filter(n => n)
        i = 0
      } else i += 1
    }
    return formatArray
  }

  function calculateSumSub () {
    const SumSubFunctions = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b
    }
    let formatArray = calculateDivAndMulti()
    for (let i = 0; i < formatArray.length;) {
      if (formatArray[i] === '+' || formatArray[i] === '-') {
        formatArray[i] = SumSubFunctions[formatArray[i]](Number(formatArray[i - 1]), Number(formatArray[i + 1]))
        formatArray[i - 1] = null
        formatArray[i + 1] = null
        formatArray = formatArray.filter(n => n)
        i = 0
      } else i += 1
    }
    setResult(String(formatArray))
  }

  return (
      <table className='calculator-container'>
        <tr>
          <th><p>{ result }</p></th>
        </tr>
        <tr className='calculator-row'>
          <td><button onClick={ clearAll }>C</button></td>
          <td><button onClick={ clear }>{'<'}</button></td>
          <td><button onClick={ () => add('/') }>/</button></td>
          <td><button onClick={ () => add('*') }>*</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button onClick={ () => add(7) } >7</button></td>
          <td><button onClick={ () => add(8) }>8</button></td>
          <td><button onClick={ () => add(9) }>9</button></td>
          <td><button onClick={ () => add('-') }>-</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button onClick={ () => add(4) }>4</button></td>
          <td><button onClick={ () => add(5) }>5</button></td>
          <td><button onClick={ () => add(6) }>6</button></td>
          <td><button onClick={ () => add('+') }>+</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button onClick={ () => add(1) }>1</button></td>
          <td><button onClick={ () => add(2) }>2</button></td>
          <td><button onClick={ () => add(3) }>3</button></td>
          <td className='equal-button-container' onClick={ calculateSumSub } ><button>=</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button onClick={ () => add(0) }>0</button></td>
          <td className='comma-button-container' onClick={ addComma }><button>.</button></td>
        </tr>
      </table>
  )
}

export default App
