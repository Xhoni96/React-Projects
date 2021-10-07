import {
  SearchIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/outline";

const Product = ({ product }) => (
  <div className="flex-grow bg-gray-blue relative">
    <figure>
      <img src={product.img} alt="" />
    </figure>
    <div className="absolute top-0 flex justify-center gap-10 items-center w-full h-full transition ease-in duration-300 group hover:bg-black-overlay">
      {/* <div className="flex justify-between w-full"> */}
      <SearchIcon className="w-24 h-24 bg-white rounded-full p-4 transition ease-in transform hover:scale-105 cursor-pointer hover:ring-blue-200 hover:ring-4 opacity-0 group-hover:opacity-100" />
      <ShoppingCartIcon className="w-24 h-24 bg-white rounded-full p-4 transition ease-in transform hover:scale-105 hover:ring-blue-200 hover:ring-4 cursor-pointer opacity-0 group-hover:opacity-100" />
      <HeartIcon className="w-24 h-24 bg-white rounded-full p-4 transition ease-in transform hover:scale-105 hover:ring-blue-200 hover:ring-4 cursor-pointer opacity-0 group-hover:opacity-100" />
      {/* </div> */}
    </div>
  </div>
);

export default Product;
