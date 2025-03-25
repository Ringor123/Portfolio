import {
  ActionFunctionArgs,
  Form,
  redirect,
  useFetcher,
  useNavigate,
} from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";
import { toast, Zoom } from "react-toastify";

type ProductDetailsProps = {
  product: Product;
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ params }: ActionFunctionArgs) => {
  if (params.id) {
    await deleteProduct(Number(params.id));
  }
  toast.success("Product removed successfully!", {
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
};

export default function ProductDetails({ product }: ProductDetailsProps) {

  const navigate = useNavigate();
  const fetcher = useFetcher()
  const isAvailable = product.availability;

  return (
    <tr className="border-b text-center">
      <td className="text-sm sm:text-lg text-gray-800">{product.name}</td>
      <td className="text-sm sm:text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-2 text-lg text-gray-800">

        <fetcher.Form method="POST">
        <button
          className={`text-sm rounded-full p-2 hover:cursor-pointer ${
            isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
          type='submit'
          name="id"
          value={product.id}
        >
          {isAvailable ? "Available" : "Not Available"}
        </button>
        </fetcher.Form>
        
      </td>
      <td className="p-2 text-lg text-gray-800">
        <div className="flex gap-2 justify-center items-center flex-col lg:flex-row">
          <button
            type="button"
            onClick={() =>
              navigate(
                `/products/edit/${product.id}`
                //   , {
                //     state: {
                //         product
                //     }
                // }
              )
            }
            className="bg-blue-500 px-2 py-1 lg:px-4 w-full lg:w-24 rounded-lg text-white text-sm lg:text-base cursor-pointer"
          >
            Edit
          </button>

          <Form
            className="w-full lg:w-24"
            method="POST"
            action={`products/delete/${product.id}`}
            onSubmit={(e) => {
              if (!confirm('Delete?')) {
                e.preventDefault()
              }
            }}
          >
            <button
              type="submit"
              className="bg-red-500 px-2 py-1 lg:px-4 w-full lg:w-24 rounded-lg text-white text-sm lg:text-base cursor-pointer"
            >
              Delete
            </button>
          </Form>
        </div>
      </td>
    </tr>
  );
}
