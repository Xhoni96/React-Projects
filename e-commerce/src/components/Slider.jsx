import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (e) => {
    const direction = e.target.id;
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <section className="h-screen overflow-hidden relative flex">
      <ChevronDoubleLeftIcon
        id="left"
        className="w-12 h-12 cursor-pointer text-grey absolute transform -translate-y-1/2 top-[40%] left-12 z-10"
        onClick={handleSlideChange}
      />
      <ChevronDoubleRightIcon
        id="right"
        className="w-12 h-12 cursor-pointer text-grey absolute transform -translate-y-1/2 top-[40%] right-12 z-10"
        onClick={handleSlideChange}
      />

      <div className="h-full flex">
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className="w-screen flex"
            style={{
              transform: `translateX(${slideIndex * -100}vw)`,
              transition: "all .8s cubic-bezier(0.4, 0, 0.2, 1)",
              backgroundColor: item.bg,
            }}
          >
            <img src={item.img} alt="Slider" />

            <div className="flex flex-col items-center justify-center gap-10 text-gray-500">
              <h1 className="text-7xl">{item.title}</h1>
              <p className="text-3xl">{item.desc}</p>
              <button
                className="text-3xl bg-blue-300 rounded-2xl p-4 px-6 transform transition duration-300 active:translate-y-1 hover:ring-blue-200 hover:ring-4"
                type="button"
              >
                SHOW NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Slider;
