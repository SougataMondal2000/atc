import Image from "next/image";
import Button from "../components/Button";
import GoogleMap from "../components/GoogleMap";
import { FaPhone } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="mt-20 lg:text-3xl md:text-2xl text-xl text-center font-bold">
        Contact us
      </h2>
      <div className="bg-white flex flex-wrap justify-center items-center rounded-xl m-10 max-lg:p-4 lg:w-fit lg:mx-auto lg:px-10 lg:gap-20 md:gap-10 shadow-xl">
        <div className="lg:m-4 md:m-2">
          <GoogleMap />
        </div>
        <div className="lg:w-[300px] md:w-[200px] mb-2">
          <h3 className="lg:text-3xl text-2xl font-bold text-wrap my-4">
            Visit us today!
          </h3>
          <p className="font-medium lg:text-base md:text-sm text-xs text-gray-600 lg:mt-4 lg:mb-6 my-4">
            We are available on WhatsApp or just call us at 9999999999.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              label="Call us"
              bgColor={"#2563eb"}
              textColor={"white"}
              logo={<FaPhone className="lg:w-5 lg:h-5" />}
              hoverBgColor={"inherit"}
              hoverTextColor={"#2563eb"}
            ></Button>
            <Link
              href="https://maps.app.goo.gl/n7z274L1QfPqxWrL6"
              target="_blank"
            >
              <Button
                label="Visit Us"
                bgColor={"inherit"}
                textColor={"#2563eb"}
                logo={<LuMapPin className="lg:w-5 lg:h-5" />}
                hoverBgColor={"#2563eb"}
                hoverTextColor={"inherit"}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
