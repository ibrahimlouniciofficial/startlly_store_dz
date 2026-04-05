import { Link, Outlet } from 'react-router-dom';
import { Sparkles, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar */}
      <header className="sticky top-0 z-50 glass-panel border-b-0 border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center neon-border group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-brand-300 transition-colors">
                Startlly<span className="text-brand-400">Store</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</Link>
              <a 
                href="https://wa.me/213672663742" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2.5 rounded-full text-sm font-semibold text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 glass-panel border-t border-white/10 z-40"
          >
            <div className="flex flex-col p-4 gap-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="p-3 rounded-lg hover:bg-white/5 text-gray-200 font-medium">Home</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="p-3 rounded-lg hover:bg-white/5 text-gray-200 font-medium">About Us</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="p-3 rounded-lg hover:bg-white/5 text-gray-200 font-medium">Contact</Link>
              <a 
                href="https://wa.me/213672663742" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg text-white font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="glass-panel border-t-0 border-white/10 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg text-white">StartllyStore</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your Journey Starts Here. احصل على premium tools بأقل تكلفة ممكنة في الجزائر.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-brand-300 text-sm">Products</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-brand-300 text-sm">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-brand-300 text-sm">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>WhatsApp: +213 672 66 37 42</li>
                <li>Email: ibrahims.agency@gmail.com</li>
                <li>Instagram: @Startlly_store_dz</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Startlly Store DZ. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
