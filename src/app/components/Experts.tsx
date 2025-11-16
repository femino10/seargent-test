// src/app/components/Experts.tsx
"use client";

export default function Experts() {
  const pros = [
    {
      name: "Phillis Owako",
      rating: 4.9,
      tasks: "50+",
      years: "9+",
      delivery: "<3 Days",
      tags: ["Resume Writing", "IT", "Maths"],
      image: "/images/phillis1.jpg"
    },
    {
      name: "Phillis Owako",
      rating: 4.9,
      tasks: "50+",
      years: "9+",
      delivery: "<3 Days",
      tags: ["Resume Writing", "IT", "Maths"],
      image: "/images/phillis2.jpg"
    },
    {
      name: "Phillis Owako",
      rating: 4.9,
      tasks: "50+",
      years: "9+",
      delivery: "<3 Days",
      tags: ["Resume Writing", "IT", "Maths"],
      image: "/images/phillis3.jpg"
    }
  ];

  const fallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = `https://via.placeholder.com/200x200/4a5568/ffffff?text=${encodeURIComponent("Phillis")}`;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet our top-performing experts</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Handpicked professionals with proven expertise in crafting resumes that stand out. Our team combines industry knowledge and personalized strategies to help you achieve your career goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pros.map((pro, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              {/* Photo with fallback */}
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-2 border-white shadow-md">
                <img
                  src={pro.image}
                  alt={pro.name}
                  className="w-full h-full object-cover"
                  onError={fallback}
                />
              </div>

              {/* Active Badge */}
              <div className="flex justify-center items-center gap-1 text-green-600 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Active</span>
              </div>

              {/* Name */}
              <h3 className="font-bold text-lg text-gray-900 mb-2">{pro.name}</h3>

              {/* Stats */}
              <div className="flex justify-center gap-4 text-sm text-gray-600 mb-2">
                <span>{pro.tasks} Completed tasks</span>
                <span>{pro.years} Years of experience</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">{pro.delivery} Delivery time</div>

              {/* Rating */}
              <div className="flex justify-center items-center gap-1 text-yellow-500 font-bold mb-3">
                <span>★</span>
                <span>{pro.rating}</span>
                <span className="text-gray-500">(499)</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {pro.tags.map((tag, j) => (
                  <span key={j} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition">
                Select pro
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="mt-12 bg-gray-800 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-900 transition">
          View all Pros
        </button>
      </div>
    </section>
  );
}