// src/app/components/HowItWorks.tsx
export default function HowItWorks({ id }: { id?: string }) {
  const steps = [
    {
      number: "01",
      title: "Choose Your Package",
      desc: "Choose a tailored resume package for your career level—Entry-Level, Mid-Career, or Executive—to make a strong impression.",
      color: "bg-yellow-50 border-yellow-300"
    },
    {
      number: "02",
      title: "Consultation or Questionnaire",
      desc: "We gather insights on your career goals and achievements through a 30-minute consultation or a detailed questionnaire, tailored to your communication preference.",
      color: "bg-pink-50 border-pink-300"
    },
    {
      number: "03",
      title: "Drafting & Revisions",
      desc: "We craft tailored, ATS-optimized resumes with unlimited revisions over 7 days to ensure your success.",
      color: "bg-teal-50 border-teal-300"
    },
    {
      number: "04",
      title: "Delivery",
      desc: "We deliver your finalized resume in 3 business days or within 24–48 hours with rush delivery.",
      color: "bg-orange-50 border-orange-300"
    }
  ];

  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">How it works</h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto text-sm leading-relaxed">
          Choose the service that best fits your needs—whether it’s homework help, professional editing, or resume writing. Our tailored packages ensure there’s something for everyone:
        </p>

        {/* Desktop */}
        <div className="hidden md:flex justify-center items-start gap-6">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div
                className={`relative w-64 h-64 ${step.color} border-2 rounded-xl clip-hexagon p-6 flex flex-col justify-center items-center text-center shadow-sm`}
              >
                <div className="text-5xl font-bold text-green-600 mb-3">{step.number}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-tight">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="w-full h-0.5 bg-gray-300 mt-6"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-56 h-56 ${step.color} border-2 rounded-xl clip-hexagon p-5 flex flex-col justify-center items-center text-center shadow-sm`}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{step.number}</div>
                <h3 className="text-base font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-tight">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}