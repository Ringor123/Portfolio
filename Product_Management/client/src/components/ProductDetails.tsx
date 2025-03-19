import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";
import { toast, Zoom } from "react-toastify";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const navigate = useNavigate()
  const isAvailable = product.availability;

  const handleDeleteClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    await deleteProduct(product)
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
    navigate('/')
  }

  return (
    <tr className="border-b text-center">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        <span
          className={`text-sm rounded-full p-2 ${
            isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isAvailable ? "Available" : "Not Available"}
        </span>
      </td>
      <td className="p-3 text-lg text-gray-800">
        <div className="flex gap-2 justify-center items-center">
          <button
            type="button"
            onClick={() => navigate(`/products/edit/${product.id}`
            //   , {
            //     state: {
            //         product
            //     }
            // }
          )}
            className="bg-red-500 px-3 py-1 w-full rounded-lg text-white text-sm cursor-pointer"
          >
            Edit
          </button>
          <button
            type="button"
            className="bg-red-500 px-3 py-1 w-full rounded-lg text-white text-sm cursor-pointer"
            onClick={(handleDeleteClick)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
