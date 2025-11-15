export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Stand-alone services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-green-700">Resume Writing</h3>
            <p className="text-3xl font-bold mt-4">Starting at <span className="text-green-600">$40.00</span></p>
            <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
              Hire pro
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-green-700">Cover Letter</h3>
            <p className="text-3xl font-bold mt-4">Starting at <span className="text-green-600">$25.00</span></p>
            <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
              Hire pro
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-green-700">LinkedIn</h3>
            <p className="text-3xl font-bold mt-4">Starting at <span className="text-green-600">$35.00</span></p>
            <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
              Hire pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}