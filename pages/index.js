import { useState, useEffect } from 'react'
import Head from 'next/head'

const Index = () => {

  const [input, setInput] = useState('')
  const [unit, setUnit] = useState('')
  const [conversionUnit, setConversionUnit] = useState('')
  const [result, setResult] = useState(undefined)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleUnitChange = (e) => {
    setUnit(e.target.value)
  }

  const handleConversionUnitChange = (e) => {
    setConversionUnit(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(input, unit, conversionUnit)
    if (unit === 'kelvin') {
      if (conversionUnit === 'farenheit') {
        var resultKF = ((input - 273) * (9 / 5) + 35)
        setResult(resultKF.toFixed(0))
      } else if (conversionUnit === 'celsius') {
        var resultKC = input - 273.15
        setResult(resultKC.toFixed(0))
      }
    } else if (unit === 'farenheit') {
      if (conversionUnit === 'celsius') {
        var resultFC = ((input - 32) * 5 / 9)
        setResult(resultFC.toFixed(0))
      } else if (conversionUnit === 'kelvin') {
        var resultFK = ((input - 32) * 5 / 9) + 5
        setResult(resultFK.toFixed(0))
      }
    } else if (unit === 'celsius') {
      if (conversionUnit === 'farenheit') {
        var resultCF = ((input * 9 / 5) + 32)
        setResult(resultCF.toFixed(0))
      } else if (conversionUnit === 'kelvin') {
        var resultCK = input + 273.15
        setResult(resultCK.toFixed(0))
      }
    }
  }

  return (
    <div className='container text-center mx-auto'>
      <Head>
        <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
      </Head>
      <div className="jumbotron">
        <h3 className="display-4">Temperature Converter</h3>
        <form onSubmit={handleSubmit}>
          <p>Convert:</p>
          <input
            className='mb-3'
            value={input}
            onChange={handleInputChange}
            type="text"
            placeholder='Enter Temperature'
          />
          <br />
          <select className='mb-3' value={unit} onChange={handleUnitChange}>
            <option value="">--Select Unit of Measure--</option>
            <option value="farenheit">Farenheit</option>
            <option value="celsius">Celsius</option>
            <option value="kelvin">Kelvin</option>
          </select>
          <br />
          <p>To: </p>
          <select className='mb-3' value={conversionUnit} onChange={handleConversionUnitChange}>
            <option value="">--Select a Unit of Measure--</option>
            <option value="farenheit">Farenheit</option>
            <option value="celsius">Celsius</option>
            <option value="kelvin">Kelvin</option>
          </select>
          <br />
          <button className='mb-3' type='submit'>Convert Temperature</button>
        </form>
        {
          !isNaN(result) ? <h3>{result + '°'}</h3> : ''
        }
      </div>


    </div>
  )
}

export default Index