// src/app/components/Experts.tsx
export default function Experts() {
  const pros = [
    { name: "Phillis Owako", rating: 4.9, tasks: "50+", years: "9+", delivery: "<3 Days", tags: ["Resume Writing", "IT", "Maths"] },
    { name: "Phillis Owako", rating: 4.9, tasks: "50+", years: "9+", delivery: "<3 Days", tags: ["Resume Writing", "IT", "Maths"] },
    { name: "Phillis Owako", rating: 4.9, tasks: "50+", years: "9+", delivery: "<3 Days", tags: ["Resume Writing", "IT", "Maths"] },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Meet our top-performing experts</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Handpicked professionals with proven expertise in crafting resumes that stand out...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pros.map((pro, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-full mx-auto mb-4" />
              <div className="flex justify-center gap-1 text-green-600 mb-2">
                <span className="text-sm">Active</span>
              </div>
              <h3 className="font-bold text-lg">{pro.name}</h3>
              <div className="flex justify-center gap-4 text-sm text-gray-600 my-2">
                <span>{pro.tasks} Completed tasks</span>
                <span>{pro.years} Years of experience</span>
              </div>
              <div className="text-sm text-gray-600">{pro.delivery} Delivery time</div>
              <div className="text-yellow-500 font-bold">★ {pro.rating} (499)</div>
              <div className="flex flex-wrap justify-center gap-2 my-3">
                {pro.tags.map((tag, j) => (
                  <span key={j} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition mt-4">
                Select pro
              </button>
            </div>
          ))}
        </div>
        <button className="mt-12 bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition">
          View all Pros
        </button>
      </div>
    </section>
  );
}