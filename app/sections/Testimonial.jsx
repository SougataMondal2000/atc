import TestimonialCard from "../components/TestimonialCard";

const testimonalRecords = [
  {
    qoute: '"Owner is good. The shop has everything regarding plumbing."',
    rating: "⭐⭐⭐⭐⭐",
    name: "Sandipan Maity",
  },
];

const Testimonial = () => {
  return (
    <div id="testimonials">
      <h2 className="lg:m-10 m-5 lg:text-3xl md:text-2xl text-xl text-center font-bold">
        What our customers think of us
      </h2>
      <div>
        <ul className="flex flex-wrap gap-10 justify-center items-center">
          {testimonalRecords.map((item) => (
            <li key={item.name}>
              <TestimonialCard
                qoute={item.qoute}
                rating={item.rating}
                name={item.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
