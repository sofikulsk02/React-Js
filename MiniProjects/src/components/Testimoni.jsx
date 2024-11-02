import React, { useState } from "react";

const Testimoni = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "Rivers do not drink their own water",
      author: "Rajib sk",
    },
    {
      quote: "Trees do eat their own fruits",
      author: "sofikul sk",
    },
    {
      quote: "The sun does not shine on itself",
      author: "Jony sk",
    },
    {
      quote: "And the flowers do not spread their fragrance for themselves",
      author: "Ajim sk",
    },
    {
      quote: "Living for others is the rule of nature",
      author: "Rabina khatun",
    },
    {
      quote: "We all are born to help each other",
      author: "Sabir sk",
    },
    {
      quote: "No matter how difficult it is",
      author: "sana niyaz",
    },
    {
      quote: "Life is better when you are happy",
      author: "Ratan sk",
    },
    {
      quote: "But much better when others are happy because of you!🦋🌴",
      author: "Rajib sk",
    },
  ];
  const handleNext = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length + 1) % testimonials.length
    );
  };
  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  return (
    <div>
      <div>{testimonials[currentIndex].quote}</div>
      <div>{testimonials[currentIndex].author}</div>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrevious}>Previous</button>
    </div>
  );
};

export default Testimoni;
