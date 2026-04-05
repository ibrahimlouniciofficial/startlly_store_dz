import { motion } from 'motion/react';
import { MessageCircle, Send, Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full pt-20 pb-32 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">Get in Touch</h1>
          <p className="text-xl text-gray-300">Have a question or ready to order? We're here to help.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Contact Method */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel rounded-3xl p-8 flex flex-col justify-center items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6 neon-border">
              <MessageCircle className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Fastest Response</h2>
            <p className="text-gray-300 mb-8">Contact us directly on WhatsApp for instant orders and support.</p>
            <a 
              href="https://wa.me/213672663742"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              +213 672 66 37 42
            </a>
          </motion.div>

          {/* Other Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Other Platforms</h2>
            <div className="space-y-4">
              <a 
                href="https://t.me/Louniciibrahim" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Telegram</p>
                  <p className="text-sm text-gray-400">@Louniciibrahim</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/Startlly_store_dz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Instagram</p>
                  <p className="text-sm text-gray-400">@Startlly_store_dz</p>
                </div>
              </a>

              <a 
                href="#" 
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Facebook</p>
                  <p className="text-sm text-gray-400">Startlly Store</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-sm text-gray-400">ibrahims.agency@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
