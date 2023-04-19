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
    if (character === 0 & result[0] === '0') return
    if (result[0] === '0' & typeof (character) === 'number' & result.length === 1) {
      const newResult = result.substring(1)
      setResult(newResult + character)
    } else setResult(result + character)
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
          <td className='comma-button-container' onClick={ () => add('.') }><button>.</button></td>
        </tr>
      </table>
  )
}

export default App
