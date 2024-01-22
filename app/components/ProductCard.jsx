import Image from "next/image";

const ProductCard = ({ productIMG, desc, title }) => {
  return (
    <div className="bg-white flex flex-wrap-reverse justify-center items-center rounded-xl lg:mb-20 m-10 max-lg:p-4 lg:w-fit lg:mx-auto lg:px-10 lg:gap-20 md:gap-10 shadow-xl">
      <div className="lg:w-[500px] md:w-[300px] max-md:text-center">
        <h2 className="lg:text-3xl text-2xl font-bold text-wrap lg:mb-4">
          {title}
        </h2>
        <p className="font-medium lg:text-base md:text-sm text-xs text-gray-600 lg:mt-4 lg:mb-6 my-2">
          {desc}
        </p>
      </div>
      <Image
        src={productIMG}
        alt=""
        width={350}
        height={350}
        className="lg:w-[350px] lg:h-[350px] md:w-[275px] md:h-[275px] lg:m-4 md:m-2"
      />
    </div>
  );
};

export default ProductCard;
