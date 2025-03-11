import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
        <div className="flex justify-between align-middle">
            <h2 className="text-2xl md:text-4xl font-black text-slate-500">
                Products
            </h2>
            <Link 
            to="products/new"
            className="bg-indigo-600 text-white text-sm rounded-md p-2 my-auto shadow-sm transition-all hover:bg-indigo-500"
            >
                Add new Product
            </Link>
        </div>

    </>
  )
}
