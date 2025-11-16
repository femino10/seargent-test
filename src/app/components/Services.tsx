// src/app/components/Services.tsx
export default function Services({ id }: { id?: string }) {
  const packages = [
    {
      name: "Entry-Level",
      price: "$49",
      desc: "Perfect for recent graduates or first-time job seekers.",
      features: [
        "1 ATS-optimized resume",
        "1 cover letter",
        "3 business days delivery",
        "1 revision round"
      ]
    },
    {
      name: "Mid-Career",
      price: "$89",
      desc: "Ideal for professionals with 3+ years of experience.",
      features: [
        "1 ATS-optimized resume",
        "1 cover letter",
        "LinkedIn profile optimization",
        "48-hour delivery",
        "Unlimited revisions (7 days)"
      ],
      popular: true
    },
    {
      name: "Executive",
      price: "$149",
      desc: "For senior leaders and C-suite professionals.",
      features: [
        "1 executive resume + bio",
        "1 cover letter",
        "LinkedIn + executive branding",
        "24-hour rush delivery",
        "Unlimited revisions (7 days)",
        "1:1 strategy call"
      ]
    }
  ];

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Choose from our expertly crafted packages designed to match your career stage and goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border-2 ${
                pkg.popular ? "border-green-500" : "border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
              <p className="text-4xl font-bold text-green-600 mb-2">{pkg.price}</p>
              <p className="text-sm text-gray-600 mb-6">{pkg.desc}</p>
              <ul className="text-left text-sm text-gray-700 mb-8 space-y-2">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 p-6 rounded-xl max-w-3xl mx-auto">
          <p className="text-green-800 font-semibold">
            Risk Free: 100% satisfaction or your money back.
          </p>
        </div>
      </div>
    </section>
  );
}