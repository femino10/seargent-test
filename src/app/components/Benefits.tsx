export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Benefits</h2>
        <p className="text-center text-gray-600 mb-12">We deliver on time, every time.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-lg mb-4"></div>
            <h3 className="font-bold text-lg">Industry-aligned</h3>
            <p className="text-sm text-gray-600 mt-2">Professional, modern resumes...</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-lg mb-4"></div>
            <h3 className="font-bold text-lg">ATS Optimized</h3>
            <p className="text-sm text-gray-600 mt-2">Beat the bots...</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-lg mb-4"></div>
            <h3 className="font-bold text-lg">Interview Guaranteed</h3>
            <p className="text-sm text-gray-600 mt-2">Or your money back...</p>
          </div>
        </div>
      </div>
    </section>
  );
}