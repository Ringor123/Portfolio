import { useState } from "react"

const INITIAL_STATE = {

}

export default function CryptoSearchForm() {

const [quote, setQuote] = useState(INITIAL_STATE)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

    setQuote({
      ...quote,
      [e.target.name]: e.target.value
    })
  } 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="currency">Currency: </label>
        <select
        name="currency"
        id="currency"
        onChange={handleChange}
        >
          <option value=""> --- Select currency --- </option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Cryptocurrency: </label>
        <select
        name="cryptocurrency"
        id="cryptocurrency"
        onChange={handleChange}
        >
          <option value=""> --- Select cryptocurrency --- </option>
        </select>
      </div>

      <input type="submit" value='Quote'/>
    </form>
  )
}
