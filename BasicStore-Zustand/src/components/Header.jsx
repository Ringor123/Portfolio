import { useState } from "react";
import cartImage from "../assets/cart.svg";
import headerBg from "../assets/header.svg";
import CartPreview from "./CartPreview";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isCartHidden, setIsCartHidden] = useState(true);

  let timeOutCart;

  const handleMouseEnter = () => {
    clearTimeout(timeOutCart);
    setIsCartHidden(false);
  };

  const handleMouseLeave = () => {
    timeOutCart = setTimeout(() => {
      setIsCartHidden(true);
    }, 50);
  };

  return (
    <header className="h-60 md:h-40 w-full mx-auto shadow-xl text-white flex flex-col items-center md:items-start justify-center relative">
      <img
        src={headerBg}
        alt="header background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="md:ml-10 p-4 bg-black border-orange-400 border-3 rounded-3xl">
        <h1 className="text-center font-extrabold text-4xl md:text-4xl items-center">
          Basic <span className="text-orange-400">Store</span>
        </h1>
        <span className="flex -mt-2 md:text-sm">All you need in one store</span>
      </div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="absolute right-4 top-4 md:mr-10 md:top-1/2 md:-translate-y-1/2">
          <button className="flex items-center justify-center w-12 h-12 p-2 border-3 border-orange-400 rounded-2xl md:h-14 md:w-14 bg-black cursor-pointer">
            <img className="w-8 h-8" src={cartImage} />
          </button>
          <AnimatePresence>
            {!isCartHidden && (
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <CartPreview />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
