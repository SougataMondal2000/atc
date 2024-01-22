import Image from "next/image";
import contactUs from "../assets/contact.png";

const GoogleMap = () => {
  return (
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9144379606723!2d88.38627657610789!3d22.507393179538287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02718575ccae77%3A0xc69c8a6f5827538b!2sAnukul%20Trading%20Corporation!5e0!3m2!1sen!2sin!4v1705902743766!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="lg:w-[600px] lg:h-[400px] md:w-[350px] md:h-[275px] w-[250px] h-[250px] rounded-lg"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
