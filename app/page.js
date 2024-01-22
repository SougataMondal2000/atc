import Image from "next/image";
import Hero from "./sections/Hero";
import Brands from "./sections/Brands";
import Products from "./sections/Products";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brands />
      <Products />
      <Testimonial />
      <Contact />
    </div>
  );
}
