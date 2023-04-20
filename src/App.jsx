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

  function addNumber (character) {
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

  function addOperators (operator) {
    const currentCharacter = result.slice(-1)
    if (currentCharacter === '*' && operator === '-') {
      setResult(result + operator)
    } else if (['+', '-', '*', '/'].includes(currentCharacter)) {
      if (result.length === 1) return
      setResult(result.slice(0, -1) + operator)
    } else setResult(result + operator)
  }

  function format () {
    const numbers = result.split(/[*+/-]+/).filter(n => n)
    const operators = result.split(/[1234567890.]+/).filter(n => n)
    let format = []
    if (result[0] === '-') {
      format.push(numbers[0] * -1)
      for (let i = 1; i < numbers.length; i += 1) {
        format.push(operators[i])
        format.push(numbers[i])
      }
    } else {
      for (let i = 0; i < numbers.length; i += 1) {
        format.push(numbers[i])
        format.push(operators[i])
      }
      format = format.slice(0, -1)
    }
    return format
  }

  function calculateDivAndMulti () {
    const DivMultiFunctions = {
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '*-': (a, b) => a * -b
    }
    const operators = ['*', '/', '*-']
    let formatArray = format()
    for (let i = 0; i < formatArray.length;) {
      if (operators.includes(formatArray[i])) {
        const firstNumber = Number(formatArray[i - 1])
        const secondNumber = Number(formatArray[i + 1])
        if (formatArray[i] === '/' & secondNumber === 0) return alert('No divisions by zero')
        formatArray[i] = String(DivMultiFunctions[formatArray[i]](firstNumber, secondNumber))
        formatArray[i - 1] = null
        formatArray[i + 1] = null
        formatArray = formatArray.filter(n => n)
        i = 0
      } else i += 1
    }
    return formatArray
  }

  function calculateSumSub () {
    if (['+', '-', '*', '-*', '/'].includes(result.slice(-1))) return alert('Invalid Format')
    const SumSubFunctions = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b
    }
    const operators = ['-', '+']
    let formatArray = calculateDivAndMulti()
    if (formatArray === undefined) return
    for (let i = 0; i < formatArray.length;) {
      if (operators.includes(formatArray[i])) {
        const firstNumber = Number(formatArray[i - 1])
        const secondNumner = Number(formatArray[i + 1])
        formatArray[i] = String(SumSubFunctions[formatArray[i]](firstNumber, secondNumner))
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
          <td><button onClick={ () => addOperators('/') }>/</button></td>
          <td><button onClick={ () => addOperators('*') }>*</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button onClick={ () => addNumber(7) } >7</button></td>
          <td><button onClick={ () => addNumber(8) }>8</button></td>
          <td><button onClick={ () => addNumber(9) }>9</button></td>
          <td><button onClick={ () => {
            if (result === '0') addNumber('-')
            else addOperators('-')
          } }>-</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button onClick={ () => addNumber(4) }>4</button></td>
          <td><button onClick={ () => addNumber(5) }>5</button></td>
          <td><button onClick={ () => addNumber(6) }>6</button></td>
          <td><button onClick={ () => addOperators('+') }>+</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button onClick={ () => addNumber(1) }>1</button></td>
          <td><button onClick={ () => addNumber(2) }>2</button></td>
          <td><button onClick={ () => addNumber(3) }>3</button></td>
          <td className='equal-button-container' onClick={ calculateSumSub } ><button>=</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button onClick={ () => addNumber(0) }>0</button></td>
          <td className='comma-button-container' onClick={ addComma }><button>.</button></td>
        </tr>
      </table>
  )
}

export default App
