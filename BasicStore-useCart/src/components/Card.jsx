import PropTypes from "prop-types";

export const Card = ({ data, addToCart }) => {

  return (
    <div className="w-full h-full flex flex-col shadow-2xl overflow-hidden rounded-xl">
      <img src={data.images[0]}/>
      <p className="text-2xl font-bold text-orange-400 text-center mt-3">{data.price} €</p>
      <div className="p-5 -mt-5 flex-grow">
        <p className="text-base text-center font-bold">{data.title}</p>
        {/* <p className="text-xs">{data.description}</p> */}
      </div>
      <div className="mt-auto">
      <button onClick={() => addToCart(data)} 
      className="w-full text-xl font-bold text-white 
      bg-black px-5 py-3 transition hover:bg-orange-400 hover:text-black 
      active:bg-orange-500 active:scale-[1.05] active:transform">
        Add to cart
      </button>
      </div>
      
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  addToCart: PropTypes.func.isRequired
}
