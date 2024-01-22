import ProductCard from "../components/ProductCard";
import hardwareIMG from "../assets/hardware.png";
import sanitaryIMG from "../assets/sanitary.png";

const Products = () => {
  return (
    <div id="products" className="mx-auto">
      <h2 className="lg:text-3xl md:text-2xl text-xl text-center font-bold">
        Our Product Categories
      </h2>
      <ProductCard
        title={"Hardware Goods"}
        desc={"Get all types of Hardware goods here!"}
        productIMG={hardwareIMG}
      />
      <ProductCard
        title={"Sanitary and Plumbing Solutions"}
        desc={"Get all types of Sanitary and Plumbing goods here!"}
        productIMG={sanitaryIMG}
      />
    </div>
  );
};

export default Products;
