import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function App() {
  const [currency, setCurrency] = useState({ rates: [] })
  const [currentBaseCurrency, setCurrentBaseCurrency] = useState('')
  const [firsAmount, setFirstAmount] = useState(0)
  const [secondaryCurrencyBase, setSecondaryCurrencyBase] = useState('')

  useEffect(async () => {
    const response = await axios.get(
      `https://api.ratesapi.io/api/latest?base=USD`
    )
    setCurrency(response.data)
  }, [])

  return (
    <div>
      <header>
        <h1>Currency Calculator</h1>
      </header>
      <section>
        <select
          value={currentBaseCurrency}
          onChange={(event) => setCurrentBaseCurrency(event.target.value)}
        >
          {Object.entries(currency.rates).map(
            ([currencyCode, currencyValues]) => {
              return (
                <option key={currencyCode} value={currencyCode}>
                  {currencyCode}
                </option>
              )
            }
          )}
        </select>

        <input
          type="number"
          onChange={(event) => setFirstAmount(event.target.value)}
          value={firsAmount}
        ></input>
        <select
          value={secondaryCurrencyBase}
          onChange={(event) => setSecondaryCurrencyBase(event.target.value)}
        >
          {Object.entries(currency.rates).map(([currencyCode]) => {
            return (
              <option key={currencyCode} value={currencyCode}>
                {currencyCode}
              </option>
            )
          })}
        </select>
        <input type="readonly" value=""></input>
      </section>
    </div>
  )
}
