const CategoryItem = ({ item }) => (
  <div className="flex-grow relative h-[70vh]">
    <figure className="h-full">
      <img className="h-full w-full object-cover" src={item.img} alt="" />
    </figure>
    <div className="absolute top-0 w-full h-full justify-center items-center flex flex-col">
      <h1 className="text-white text-6xl font-bold my-8 ">{item.title}</h1>
      <button
        className="bg-white text-gray-500 text-3xl p-4 px-7 rounded-lg w-max transition duration-300 transform active:translate-y-1 hover:ring-indigo-300 hover:ring-4"
        type="button"
      >
        SHOP NOW
      </button>
    </div>
  </div>
);

export default CategoryItem;
