import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { db } from "./db";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(db);
  }, []);



  return (
    <div className="max-[]: min-h-screen flex flex-col">
      <Header />

      <Main data={data} />

      <Footer />
    </div>
  );
}

export default App;


