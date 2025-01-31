import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { db } from "./db";

function App() {

  const [data] = useState(db)

  return (
    <div className="max-[]: min-h-screen flex flex-col">
      <Header />

      <Main data={data} />

      <Footer />
    </div>
  );
}

export default App;


