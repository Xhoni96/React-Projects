import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import slideImage from "../assets/slider_1.jpeg";

const Slider = () => (
  <div className=" h-screen relative flex">
    <ChevronDoubleLeftIcon className="w-12 h-12 cursor-pointer text-white absolute transform -translate-y-1/2 top-2/4 left-12" />
    <ChevronDoubleRightIcon className="w-12 h-12 cursor-pointer text-white absolute transform -translate-y-1/2 top-2/4 right-12" />
    {/* FIRST SLIDE */}
    <div className="h-full overflow-hidden">
      {/* <div className=""> */}
      <img src={slideImage} alt="Slider" className="" />
      {/* </div> */}

      <div className="flex flex-col items-center justify-center gap-10 absolute top-1/3 right-60 text-gray-500 ">
        <h1 className="text-7xl">SUMMER SALE</h1>
        <p className="text-3xl">
          DON&apos;T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
        </p>
        <button
          className="text-3xl bg-blue-300 rounded-2xl p-4 px-6 transform transition active:-translate-y-2"
          type="button"
        >
          SHOW NOW
        </button>
      </div>
    </div>

    {/* SECOND SLIDE */}
    <div className="h-full overflow-hidden">
      {/* <div className=""> */}
      <img src={slideImage} alt="Slider" className="" />
      {/* </div> */}

      <div className="flex flex-col items-center justify-center gap-10 absolute top-1/3 right-60 text-gray-500 ">
        <h1 className="text-7xl">WINTER SALE</h1>
        <p className="text-3xl">
          DON&apos;T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
        </p>
        <button
          className="text-3xl bg-blue-300 rounded-2xl p-4 px-6 transform transition active:-translate-y-2"
          type="button"
        >
          SHOW NOW
        </button>
      </div>
    </div>

    {/* THIRD SLIDE */}
    <div className="h-full overflow-hidden ">
      {/* <div className=""> */}
      <img src={slideImage} alt="Slider" className="" />
      {/* </div> */}

      <div className="flex flex-col items-center justify-center gap-10 absolute top-1/3 right-60 text-gray-500 ">
        <h1 className="text-7xl">POPULAR SALE</h1>
        <p className="text-3xl">
          DON&apos;T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
        </p>
        <button
          className="text-3xl bg-blue-300 rounded-2xl p-4 px-6 transform transition active:-translate-y-2"
          type="button"
        >
          SHOW NOW
        </button>
      </div>
    </div>
  </div>
);

export default Slider;
