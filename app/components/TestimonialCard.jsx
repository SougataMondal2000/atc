import React from "react";

const TestimonialCard = ({ qoute, rating, name }) => {
  return (
    <div className="w-[250px] h-[220px] bg-white rounded-xl text-center items-center p-10 shadow-xl">
      <p className="font-bold text-sm mb-4">{qoute}</p>
      <p>{rating}</p>
      <p className="font-bold text-xs mt-2">{name}</p>
    </div>
  );
};

export default TestimonialCard;
