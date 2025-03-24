import {
  ActionFunctionArgs,
  Form,
  Link,
  useActionData,
  redirect,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { editProduct, getProductById } from "../services/ProductService";
import { Zoom, toast } from "react-toastify";
import { Product } from "../types";
import ProductForm from "../components/ProductForm";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (params.id !== undefined) {
    const product = await getProductById(Number(params.id));
    console.log(product);
    if (!product) {
      return redirect("/");
    }
    return product;
  } else {
    throw new Error("Invalid param");
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request, params }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());
  console.log(data)

  let error = "";
  if (Object.values(data).includes("")) {
    error = "All fields are required";
    return error;
  }
  if (params.id !== undefined) {
    await editProduct(data, Number(params.id));
    toast.success(`Product ${data} edited successfully!`, {
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

    return redirect("/");
  }
};

const availabilityOptions = [
  { name: "Available", value: true },
  { name: "Not available", value: false },
];

export default function EditProduct() {
  // const {state} = useLocation()
  // const product : Product = state.product
  const product: Product = useLoaderData();
  console.log(product);

  const error = useActionData();

  return (
    <>
      <div className="flex justify-between align-middle mb-5">
        <h2 className="text-2xl md:text-4xl font-black text-slate-500">
          Edit Product
        </h2>
        <Link
          to="/"
          className="bg-indigo-600 text-white text-sm rounded-md p-2 my-auto shadow-sm transition-all hover:bg-indigo-500"
        >
          Back to products
        </Link>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form className="mt-10" method="PUT">
        <ProductForm product={product} />

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="availability">
            Availability:
          </label>
          <select
            id="availability"
            className="mt-2 block w-full p-3 bg-gray-50 border border-gray-200 rounded-md outline-none focus:ring-1 focus:ring-indigo-300"
            name="availability"
            defaultValue={product?.availability.toString()}
          >
            {availabilityOptions.map((option) => (
              <option key={option.name} value={option.value.toString()}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Save Changes"
        />
      </Form>
    </>
  );
}
