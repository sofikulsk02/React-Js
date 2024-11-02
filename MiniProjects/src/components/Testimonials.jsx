import React, { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product i have ever used",
      author: "John wick",
    },
    {
      quote: "Life is good and more beautiful than we think it is",
      author: "Rajib seikh",
    },
    {
      quote: "sometime you win by loosing something",
      author: "sofikul sk",
    },
    {
      quote:
        "Never ask for advise to someone who is not deciplene in her/his life",
      author: "rohit singh",
    },
  ];
  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  const handleNext = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length + 1) % testimonials.length
    );
  };
  return (
    <div className="bg-slate-500 h-[100vh] w-[100vw]  flex justify-center items-center">
      <div className="card h-[200px] w-[500px] rounded-2xl border border-black">
        <div className="quote h-[70%] w-[100%] flex flex-col justify-center items-center">
          <section>
            <div>{testimonials[currentIndex].quote}:</div>
            <div>-{testimonials[currentIndex].author}</div>
          </section>
        </div>
        <div className="author h-[30%] w-[100] border border-black rounded-b-2xl flex justify-between items-center">
          <button
            className="ml-[50px] bg-slate-300 rounded-md w-[100px] h-[70%]"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="mr-[50px] bg-slate-300 rounded-md w-[100px] h-[70%]"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
