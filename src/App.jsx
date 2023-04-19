import React from 'react'
import './App.css'

function App () {
  return (
      <table className='calculator-container'>
        <tr>
          <th><p></p></th>
        </tr>
        <tr className='calculator-row'>
          <td><button>C</button></td>
          <td><button>{'<'}</button></td>
          <td><button>/</button></td>
          <td><button>*</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button>7</button></td>
          <td><button>8</button></td>
          <td><button>9</button></td>
          <td><button>-</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button>4</button></td>
          <td><button>5</button></td>
          <td><button>6</button></td>
          <td><button>+</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button>1</button></td>
          <td><button>2</button></td>
          <td><button>3</button></td>
          <td className='equal-button-container'><button>=</button></td>
        </tr>
        <tr className='calculator-row'>
          <td><button>0</button></td>
          <td className='comma-button-container'><button>.</button></td>
        </tr>
      </table>
  )
}

export default App
