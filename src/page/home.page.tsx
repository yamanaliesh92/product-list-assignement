import Navbar from "../components/navbar";
import ProductList from "../components/product-list";
import ScrollToTop from "../components/scroll-to-top";

const HomePage = () => {
  return (
    <div className="space-x-4 relative">
      <Navbar />
      <ScrollToTop />
      <ProductList />
    </div>
  );
};

export default HomePage;
