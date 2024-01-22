import Link from "next/link";

const navLinks = [
  { title: "Home", navURL: "/" },
  { title: "Products", navURL: "#products" },
  { title: "Testimonials", navURL: "#testimonials" },
  { title: "Contact", navURL: "#contact" },
];
const Footer = () => {
  return (
    <div className="text-center border border-t-gray-300 lg:p-10 p-2">
      <div>
        <p className="md:text-xl text-lg font-semibold">
          Anukul Trading Corp<span className="text-blue-600">.</span>
        </p>

        <p className="text-xs font-medium text-gray-500">
          2023 @ATC
          <br />
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
