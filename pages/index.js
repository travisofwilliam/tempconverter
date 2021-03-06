import { useState } from 'react'
import Head from 'next/head'

const Index = () => {

  const [input, setInput] = useState('')
  const [inputPersist, setInputPersist] = useState('')
  const [unit, setUnit] = useState('')
  const [conversionUnit, setConversionUnit] = useState('')
  const [result, setResult] = useState(undefined)
  const [errorMessage, setErrorMessage] = useState('')
  const [unitBtn, setUnitBtn] = useState('btn-info')
  const [conversionBtn, setConversionBtn] = useState('btn-info')
  const [clicked, setClicked] = useState(false)

  const handleInputChange = (e) => {
    setInput(e.target.value)
    setInputPersist(e.target.value)
    setClicked(false)
  }

  const handleUnitChange = (e) => {
    setUnit(e.target.value)
    if (e.target.value === '') {
      setUnitBtn('btn-info')
    } else (
      setUnitBtn('btn-success')
    )
    setClicked(false)
  }

  const handleConversionUnitChange = (e) => {
    setConversionUnit(e.target.value)
    if (e.target.value === '') {
      setConversionBtn('btn-info')
    } else {
      setConversionBtn('btn-success')
    }
    setClicked(false)
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
        if (input < 0) {
          setErrorMessage('Temperature can not be below absolute zero!')
        }
        else if (conversionUnit === 'farenheit') {
          var resultKF = ((parseInt(input) - 273) * (9 / 5) + 35)
          setResult(resultKF.toFixed(2))
        } else if (conversionUnit === 'celsius') {
          var resultKC = parseInt(input) - 273.15
          setResult(resultKC.toFixed(2))
        } else if (conversionUnit === 'kelvin') {
          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!')
        }
      } else if (unit === 'farenheit') {
        if (input < -456.4) {
          setErrorMessage('Temperature can not be below absolute zero!')
        }
        else if (conversionUnit === 'celsius') {
          var resultFC = ((parseInt(input) - 32) * 5 / 9)
          setResult(resultFC.toFixed(0))
        } else if (conversionUnit === 'kelvin') {
          var resultFK = ((parseInt(input) - 32) * 5 / 9) + 5
          setResult(resultFK.toFixed(2))
        } else if (conversionUnit === 'farenheit') {
          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!')
        }
      } else if (unit === 'celsius') {
        if (input < -273.15) {
          setErrorMessage('Temperature can not be below absolute zero!')
        }
        else if (conversionUnit === 'farenheit') {
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
    setInputPersist('')
    setClicked(true)
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
          <select
            className={`mb-3 dropdown p-2 ${unitBtn}`}
            style={{ color: 'black' }}
            value={unit}
            onChange={handleUnitChange}
          >
            <option value="">--Select Unit of Measure--</option>
            <option value="farenheit">Farenheit</option>
            <option value="celsius">Celsius</option>
            <option value="kelvin">Kelvin</option>
          </select>
          <br />
          <p>To: </p>
          <select
            className={`mb-3 dropdown p-2 ${conversionBtn}`}
            style={{ color: 'black' }}
            value={conversionUnit}
            onChange={handleConversionUnitChange}
          >
            <option value="">--Select a Unit of Measure--</option>
            <option value="farenheit">Farenheit</option>
            <option value="celsius">Celsius</option>
            <option value="kelvin">Kelvin</option>
          </select>
          <br />
          <button
            className='btn btn-primary mb-3'
            type='submit'
          >
            Convert Temperature
          </button>

        </form>
        {
          !isNaN(result) && clicked ?
            <h3>{
              conversionUnit === 'kelvin' ? result
                : result + '°'
            }</h3>
            : errorMessage
        }
      </div>

    </div>
  )
}

export default Index