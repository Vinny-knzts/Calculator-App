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
          <td className='equal-button-container' ><button>=</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button onClick={ () => add(0) }>0</button></td>
          <td className='comma-button-container' onClick={ addComma }><button>.</button></td>
        </tr>
      </table>
  )
}

export default App
