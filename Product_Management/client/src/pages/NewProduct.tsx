import { ActionFunctionArgs, Form, Link, useActionData, redirect } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addProduct } from "../services/ProductService";
import { Zoom, toast } from "react-toastify";


// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());

  let error = ''
  if(Object.values(data).includes('')) {
    error = 'All fields are required'
    return error
  }

  await addProduct(data)

  toast.success('New product added successfully!', {
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

  return redirect("/")
};

export default function NewProduct() {
  const error = useActionData()

  return (
    <>
      <div className="flex justify-between align-middle mb-5">
        <h2 className="text-2xl md:text-4xl font-black text-slate-500">
          New Product
        </h2>
        <Link
          to="/"
          className="bg-indigo-600 text-white text-sm rounded-md p-2 my-auto shadow-sm transition-all hover:bg-indigo-500"
        >
          Back to products
        </Link>
      </div>

    {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form className="mt-10" method="POST">
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Nombre Producto:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 border border-gray-200 rounded-md outline-none focus:ring-1 focus:ring-indigo-300"
            placeholder="Product Name"
            name="name"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Precio:
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            className="mt-2 block w-full p-3 bg-gray-50 border border-gray-200 rounded-md outline-none focus:ring-1 focus:ring-indigo-300"
            placeholder="Product Price. ej. 200, 300"
            name="price"
          />
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </>
  );
}
