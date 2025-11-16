// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Copyright */}
          <div>
            <div className="text-2xl font-bold text-green-500 mb-2">ResumePro</div>
            <p className="text-sm text-gray-400">
              © 2025 ResumePro. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Built with care for job seekers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-green-400 transition">Services</a></li>  {/* ← SCROLL */}
              <li><a href="#how-it-works" className="hover:text-green-400 transition">How It Works</a></li>  {/* ← SCROLL */}
              <li><a href="#experts" className="hover:text-green-400 transition">Meet Our Experts</a></li>  {/* ← SCROLL */}
              <li><a href="#contact" className="hover:text-green-400 transition">Contact Us</a></li>  {/* ← PLACEHOLDER */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          Felix Ndirangu
        </div>
      </div>
    </footer>
  );
}