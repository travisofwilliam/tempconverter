import { useState } from 'react'
import Head from 'next/head'

const Index = () => {

  const [input, setInput] = useState('')
  const [unit, setUnit] = useState('')
  const [conversionUnit, setConversionUnit] = useState('')
  const [result, setResult] = useState(undefined)
  const [errorMessage, setErrorMessage] = useState('')
  const [unitBtn, setUnitBtn] = useState('btn-info')
  const [conversionBtn, setConversionBtn] = useState('btn-info')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleUnitChange = (e) => {
    setUnit(e.target.value)
    setUnitBtn('btn-success')
  }

  const handleConversionUnitChange = (e) => {
    setConversionUnit(e.target.value)
    setConversionBtn('btn-success')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isNaN(input) || input === '') {
      setErrorMessage('Please enter a tempterature to convert. Temperature must only contain integers.')
    } else if (unit === '') {
      setErrorMessage('Please select a valid unit of measurement')
    } else if (conversionUnit === '') {
      setErrorMessage('Please select a valid conversion unit')
    } else {
      if (unit === 'kelvin') {
        if (conversionUnit === 'farenheit') {
          var resultKF = ((parseInt(input) - 273) * (9 / 5) + 35)
          setResult(resultKF.toFixed(0))
        } else if (conversionUnit === 'celsius') {
          var resultKC = parseInt(input) - 273.15
          setResult(resultKC.toFixed(0))
        } else if (conversionUnit === 'kelvin') {
          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!')
        }
      } else if (unit === 'farenheit') {
        if (conversionUnit === 'celsius') {
          var resultFC = ((parseInt(input) - 32) * 5 / 9)
          setResult(resultFC.toFixed(0))
        } else if (conversionUnit === 'kelvin') {
          var resultFK = ((parseInt(input) - 32) * 5 / 9) + 5
          setResult(resultFK.toFixed(0))
        } else if (conversionUnit === 'farenheit') {
          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!')
        }
      } else if (unit === 'celsius') {
        if (conversionUnit === 'farenheit') {
          var resultCF = ((parseInt(input) * 9 / 5) + 32)
          setResult(resultCF.toFixed(0))
        } else if (conversionUnit === 'kelvin') {
          var resultCK = (parseInt(input) + 273.15)
          setResult(resultCK.toFixed(2))
        } else if (conversionUnit === 'celsius') {
          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!')
        }
      }
    }
  }

  return (
    <div className='container text-center mx-auto'>
      <Head>
        <link rel="stylesheet" href="https://bootswatch.com/4/pulse/bootstrap.min.css" />
      </Head>
      <div className="jumbotron">
        <form onSubmit={handleSubmit}>
          <h1 className="display-5" style={{ objectFit: 'scale-down' }}>Temperature Converter</h1>
          <p>Convert:</p>
          <input
            className='mb-3'
            value={input}
            onChange={handleInputChange}
            type="text"
            placeholder='Enter Temperature'
          />
          <br />
          <select className={`mb-3 dropdown p-2 ${unitBtn}`} style={{ color: 'black' }} value={unit} onChange={handleUnitChange}>
            <option value="">--Select Unit of Measure--</option>
            <option value="farenheit">Farenheit</option>
            <option value="celsius">Celsius</option>
            <option value="kelvin">Kelvin</option>
          </select>
          <br />
          <p>To: </p>
          <select className={`mb-3 dropdown p-2 ${conversionBtn}`} style={{ color: 'black' }} value={conversionUnit} onChange={handleConversionUnitChange}>
            <option value="">--Select a Unit of Measure--</option>
            <option value="farenheit">Farenheit</option>
            <option value="celsius">Celsius</option>
            <option value="kelvin">Kelvin</option>
          </select>
          <br />
          <button className='btn btn-primary mb-3' type='submit'>Convert Temperature</button>
        </form>
        {
          !isNaN(result) ? <h3>{result + '°'}</h3> : errorMessage
        }
      </div>

    </div>
  )
}

export default Index