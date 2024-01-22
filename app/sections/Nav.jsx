import Link from "next/link";
import React from "react";
const navLinks = [
  { title: "Home", navURL: "/" },
  { title: "Products", navURL: "#products" },
  { title: "Testimonials", navURL: "#testimonials" },
  { title: "Contact", navURL: "#contact" },
];

const Nav = () => {
  return (
    <nav className="flex justify-between items-center lg:py-10 lg:px-32 md:p-10 p-4">
      <p className="max-md:hidden lg:text-3xl md:text-2xl font-semibold">
        Anukul Trading Corp<span className="text-blue-600">.</span>
      </p>
      <p className="md:hidden text-2xl font-semibold">
        ATC<span className="text-blue-600">.</span>
      </p>
      <div>
        <ul className="flex justify-center items-center lg:gap-10 gap-2 lg:text-base font-medium text-xs">
          {navLinks.map((item) => (
            <li key={item.title} className="hover:text-blue-600">
              <Link href={item.navURL}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
