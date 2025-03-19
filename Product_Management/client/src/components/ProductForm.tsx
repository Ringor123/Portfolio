
export default function ProductForm() {
  return (
    <>
     <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Product name:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 border border-gray-200 rounded-md outline-none focus:ring-1 focus:ring-indigo-300"
            placeholder="Product Name"
            name="name"
            defaultValue={product.name}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Price:
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            className="mt-2 block w-full p-3 bg-gray-50 border border-gray-200 rounded-md outline-none focus:ring-1 focus:ring-indigo-300"
            placeholder="Product Price. ej. 200, 300"
            name="price"
            defaultValue={product.price}
          />
        </div>
    </>
  )
}
