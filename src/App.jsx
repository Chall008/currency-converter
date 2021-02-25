import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function App() {
  const [currency, setCurrency] = useState({ rates: [] })
  const [currentBaseCurrency, setCurrentBaseCurrency] = useState('USD')
  const [amount, setAmount] = useState(0)
  const [secondaryCurrencyBase, setSecondaryCurrencyBase] = useState('GBR')

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
        <ul value={currentBaseCurrency}>
          {Object.entries(currency.rates).map(
            ([currencyCode, currencyValues]) => {
              return (
                <li key={currencyCode}>
                  {currencyCode} : {(currencyValues * amount).toFixed(2)}
                </li>
              )
            }
          )}
        </ul>
      </section>
      <footer>
        <div>
          USD:
          <input
            value={amount}
            type="number"
            onChange={(event) => setAmount(event.target.value)}
          ></input>
        </div>
      </footer>
      {/* <section>
        <select
          value={currentBaseCurrency}
          onChange={(event) => setCurrentBaseCurrency(event.target.value)}
        >
          {Object.entries(currency.rates).map(
            ([currencyCode, currencyValues]) => {
              return <option key={currencyCode}>{currencyCode}</option>
            }
          )}
        </select>
        <input
          type="number"
          onChange={(event) => setAmount(event.target.value)}
          value={amount}
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
        <input type="readonly" ></input>
      </section> */}
    </div>
  )
}
