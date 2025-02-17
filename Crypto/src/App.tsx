import CryptoSearchForm from "./components/CryptoSearchForm"

function App() {

  return (
<div className="container">
  <h1 className="app-title">
    <span>Cryptocurrency</span> quoter
  </h1>

  <div className="content">
    <CryptoSearchForm />
  </div>
</div>
  )
}

export default App
