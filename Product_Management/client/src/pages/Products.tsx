import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom";
import { getAllProducts, updateAvailability } from "../services/ProductService";
import { Product } from "../types";
import ProductDetails from "../components/ProductDetails";
import { toast, Zoom } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const products = await getAllProducts();

  return products;
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({request}: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());
  console.log(data)

  if(data.id) {
    await updateAvailability(Number(data.id))
  }

  toast.success("Availability updated successfully!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Zoom,
  });
}

export default function Products() {
  const data: Product[] = useLoaderData();

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
        <div className="p-2">
          <table className="w-full mt-5 table-auto">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-2">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Availability</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map(product => (
                <ProductDetails key={product.id} product={product} />
              ))}
              
            </tbody>
          </table>
        </div>
    </>
  );
}
