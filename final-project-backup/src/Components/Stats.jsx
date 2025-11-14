import React from "react";

const Stats = () => {
  const stats = [
    { number: "5", label1: "Years", label2: "of Service" },
    { number: "1,000+", label1: "Products", label2: "for your creative needs" },
    { number: "10+", label1: "Workshops", label2: "Hosted annually" },
    { number: "98%", label1: "Client", label2: "Satisfaction Rate" },
  ];

  return (
    <section className="relative z-20 -mt-20">
      <div className="max-w-6xl mx-auto h-50 bg-white shadow-xl rounded-2xl py-10 px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-1 h-12">
              {item.number}
            </h2>
            <p className="text-gray-800 font-semibold">{item.label1}</p>
            <p className="text-gray-500">{item.label2}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;