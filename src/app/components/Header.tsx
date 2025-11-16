// src/app/components/Header.tsx
export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">ResumePro</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-700 hover:text-green-600">Services</a>  {/* ← SCROLL */}
          <a href="#how-it-works" className="text-gray-700 hover:text-green-600">How It Works</a>  {/* ← SCROLL */}
          <a href="#experts" className="text-gray-700 hover:text-green-600">Experts</a>  {/* ← SCROLL */}
        </nav>
      </div>
    </header>
  );
}