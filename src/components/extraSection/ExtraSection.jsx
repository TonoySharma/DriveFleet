"use client";

import React, { useEffect, useState } from "react";

const CounterCard = ({ target, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = target / (duration / 20);

    const counter = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div
      className="bg-white/70 backdrop-blur-md 
      border border-white/40 rounded-3xl p-6 
      shadow-lg hover:-translate-y-2 
      transition-all duration-300">
      <h2 className="text-3xl font-black text-black">
        {count}
        {suffix}
      </h2>

      <p className="text-gray-500 mt-2">
        {label}
      </p>
    </div>
  );
};

const ExtraSection = () => {
  return (
    <div className="container mx-auto my-15">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

        <CounterCard
          target={120}
          suffix="+"
          label="Premium Cars" />

        <CounterCard
          target={50}
          suffix="+"
          label="Luxury Brands"/>

        <CounterCard
          target={24}
          suffix="/7"
          label="Customer Support"/>

        <CounterCard
          target={10}
          suffix="k+"
          label="Happy Riders"/>

      </div>

    </div>
  );
};

export default ExtraSection;