import { SearchCircleIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import Dropdown from "./LanguageSelect";

const Navbar = () => (
  <nav className="bg-white p-2 pr-6 flex justify-between items-center">
    <div className="flex-grow flex">
      <Dropdown />
      <div className="border w-max flex px-2 rounded-2xl flex-grow-0 items-center mx-3">
        <input
          type="search"
          placeholder="Search"
          className="px-3 py-2 outline-none caret-blue-500"
        />
        <SearchCircleIcon className="h-10 w-10 transition duration-500 cursor-pointer text-gray-600 transform active:-translate-y-4" />
      </div>
    </div>
    <div className="flex-grow font-bold text-4xl">Your Commerce</div>
    <div className="flex justify-between items-center gap-6">
      <button type="button">REGISTER</button>
      <button type="button">SIGN IN</button>
      <div className="relative p-2">
        <ShoppingCartIcon className="h-10 w-10 transition duration-500 cursor-pointer transform active:scale-125" />
        <span className="absolute top-0 right-0 bg-blue-300 rounded-2xl h-6 w-6 text-white text-lg flex justify-center items-center p-3">
          4
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
