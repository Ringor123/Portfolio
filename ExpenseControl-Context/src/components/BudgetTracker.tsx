import AmountDisplay from "./AmountDisplay";

export default function BudgetPlanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/graphic.jpg" alt="spent graphic" className="w-60 h-60" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="transition bg-[#31393C] hover:bg-[#D62828] w-full p-2 
        text-white uppercase font-bold rounded-lg cursor-pointer"
        >
          Reset App
        </button>

        <AmountDisplay label="Budget" amount={300} />

        <AmountDisplay label="Available" amount={200} />

        <AmountDisplay label="Spent" amount={100} />
      </div>
    </div>
  );
}
