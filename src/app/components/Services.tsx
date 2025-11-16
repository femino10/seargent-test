// src/app/components/Services.tsx
export default function Services() {
  const services = [
    {
      title: "Resume Writing",
      price: "40.00",
      desc: "Craft a results-driven resume that opens doors—whether you’re starting fresh, pivoting careers, or aiming higher. We help you present your value clearly, confidently, and competitively.",
      entails: [
        "Comprehensive resume writing, whether creating from scratch or rewriting an existing document",
        "Tailoring content to align with your career goals, industry standards, and specific job targets"
      ],
      risk: true
    },
    {
      title: "Cover Letter Writing",
      price: "25.00",
      desc: "Make a strong first impression with a tailored cover letter that connects your experience to the role, showcases your personality, and motivates hiring managers to read your resume.",
      entails: [
        "Tailored narrative to express interest, alignment with job, and personality",
        "Integration of resume highlights without redundancy"
      ],
      risk: true
    },
    {
      title: "LinkedIn Profile Optimization",
      price: "35.00",
      desc: "Turn your LinkedIn profile into a powerful professional branding tool that attracts recruiters, builds credibility, and supports your resume with a consistent, searchable online presence.",
      entails: [
        "Optimizing your headline, summary (About), work experience, and skills sections",
        "Strategic keyword and SEO integration to improve visibility in recruiter searches"
      ],
      risk: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Stand-alone services</h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
          We review for accuracy, clarity, and originality—refining everything from grammar to structure and citations. This ensures your work is polished and meets academic or professional standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border-2 border-green-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-bold text-green-700 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

              <div className="text-left mb-6">
                <p className="font-semibold text-gray-800 mb-2">What it entails</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.entails.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-left mb-4">
                <span className="text-xs text-gray-500">Starting at</span>
                <p className="text-3xl font-bold text-green-600">
                  ${service.price}
                </p>
              </div>

              <a href="#" className="text-green-600 text-sm font-medium hover:underline mb-3">
                View more
              </a>

              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition">
                Hire pro
              </button>

              {service.risk && (
                <p className="text-xs text-gray-500 mt-3 italic">
                  *Risk Free. Release pay only if satisfied
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}