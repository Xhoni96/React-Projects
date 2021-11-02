import Footer from "./Footer";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Products from "./Products";
import Newsletter from "./Newsletter";
// import Dropdown from "./LanguageSelect";

const ProductList = () => (
  <div>
    <Navbar />
    <Announcement />
    <h1 className="m-2 text-6xl font-semibold mx-4">Dresses</h1>

    {/* Filter Container */}
    <div className="flex justify-between p-8">
      <div>
        <span className="font-semibold text-3xl">Filter Products:</span>
      </div>
      <div>
        <span className="font-semibold text-3xl">Sort Products:</span>
      </div>
    </div>
    <Products />
    <Newsletter />
    <Footer />
  </div>
);

export default ProductList;
