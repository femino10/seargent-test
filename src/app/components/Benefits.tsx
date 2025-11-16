// src/app/components/Benefits.tsx
export default function Benefits() {
  const benefits = [
    {
      icon: "📄",
      title: "Industry-aligned, professionally written resumes",
      desc: "Each resume is written by experienced professionals with insight into modern hiring practices. We tailor it to your field, your goals, and your unique experience—no templates, no guesswork."
    },
    {
      icon: "📋",
      title: "Strategic resume formatting",
      desc: "Recruiters spend 6–8 seconds on average scanning a resume. We design layouts that guide the reader’s eye and highlight the right information at the right time—whether it’s for ATS (Applicant Tracking Systems) or human readers."
    },
    {
      icon: "❤️",
      title: "Language that reflects value, not just duties",
      desc: "We move beyond job descriptions and highlight your impact—quantified achievements, leadership, innovation, and growth. Our focus is on showing what you did, why it mattered, and how it fits your next opportunity."
    },
    {
      icon: "✅",
      title: "Alignment with resume writing standards",
      desc: "We follow principles established by professional associations like the NRWA and adapt them to suit each client’s individual background, ensuring your resume reflects both technical accuracy and human appeal."
    },
    {
      icon: "🎯",
      title: "Get you interviews—guaranteed",
      desc: "We don’t just write resumes—we write them to get results. If you don’t land an interview within a reasonable timeframe, we’ll revise your resume for free until you do. Your success is our commitment."
    },
    {
      icon: "🤝",
      title: "A collaborative process",
      desc: "We don’t guess your story—we ask, listen, and refine. You’ll have a chance to review and provide feedback to ensure your resume truly reflects you."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits</h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
          We understand the importance of meeting deadlines—whether it’s for an urgent job application, journal submission, or upcoming exam. We deliver on time, every time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left flex flex-col"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}