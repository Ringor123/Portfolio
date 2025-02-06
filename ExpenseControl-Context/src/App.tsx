import BudgetForm from "./components/BudgetForm";

function App() {
  return (
    <>
      <header className="bg-[#003049] py-8 max-h-72">
        <h1 className="uppercase text-center font-bold text-4xl text-white">
          Budget Planner
        </h1>
      </header>

      <div className="max-w-3xl mx-auto bg-[#FCBF49] shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  );
}

export default App;
