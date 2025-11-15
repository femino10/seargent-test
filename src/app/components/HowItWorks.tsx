// src/app/components/HowItWorks.tsx
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Package",
      desc: "Choose a tailored resume package for your career level—Entry-Level, Mid-Career, or Executive—to make a strong impression."
    },
    {
      number: "02",
      title: "Consultation or Questionnaire",
      desc: "We gather insights on your career goals and achievements through a 30-minute consultation or a detailed questionnaire, tailored to your communication preference."
    },
    {
      number: "03",
      title: "Drafting & Revisions",
      desc: "We craft tailored, ATS-optimized resumes with unlimited revisions over 7 days to ensure your success."
    },
    {
      number: "04",
      title: "Delivery",
      desc: "We deliver your finalized resume in 3 business days or within 24–48 hours with rush delivery."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">How it works</h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
          Choose the service that best fits your needs—whether it’s homework help, professional editing, or resume writing. Our tailored packages ensure there’s something for everyone:
        </p>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:flex justify-center items-center gap-8 flex-wrap">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="relative">
                {/* Hexagon */}
                <div className="w-40 h-40 bg-white rounded-lg transform rotate-45 overflow-hidden shadow-lg">
                  <div className="flex items-center justify-center h-full w-full rotate-[-45deg] p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{step.number}</div>
                    </div>
                  </div>
                </div>
                {/* Title & Desc Below */}
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-48 text-center">
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
                </div>
              </div>
              {/* Arrow */}
              {i < steps.length - 1 && (
                <div className="mx-4 text-green-600 text-3xl">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-32 h-32 bg-white rounded-lg transform rotate-45 overflow-hidden shadow-lg mb-4">
                <div className="flex items-center justify-center h-full w-full rotate-[-45deg] p-4">
                  <div className="text-2xl font-bold text-green-600">{step.number}</div>
                </div>
              </div>
              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2 text-center max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}