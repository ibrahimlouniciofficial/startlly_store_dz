import { motion } from 'motion/react';
import { X, CheckCircle2, MessageCircle, ShieldCheck, Zap, CreditCard } from 'lucide-react';
import { Product } from '../data/products';
import React, { useEffect } from 'react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const whatsappMessage = encodeURIComponent(`Hello Startlly Store! I'm interested in buying ${product.name}. Can you give me more details?`);
  const whatsappUrl = `https://wa.me/213672663742?text=${whatsappMessage}`;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-brand-900 border border-white/10 rounded-3xl w-full max-w-4xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative my-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Visual */}
          <div className={`relative h-64 md:h-auto bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 text-center p-8">
              <h2 className="text-4xl md:text-5xl font-black text-white text-glow mb-2">{product.name}</h2>
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium">
                {product.category}
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="p-6 md:p-8 flex flex-col h-full max-h-[70vh] overflow-y-auto">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Pricing Options</h3>
              <div className="grid gap-3">
                {product.prices.map((price, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-400 transition-colors">
                    <span className="text-gray-300 font-medium">{price.duration}</span>
                    <span className="text-xl font-bold text-brand-300">{price.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Perfect For</h3>
              <p className="text-gray-300 bg-white/5 p-4 rounded-xl border border-white/10">
                {product.forWho}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Buy From Us?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-green-400" /> Full Guarantee
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Zap className="w-4 h-4 text-accent-blue" /> Instant Delivery
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300 col-span-2">
                  <CreditCard className="w-4 h-4 text-brand-400" /> CCP, BaridiMob, Flexy, RedotPay, Binance
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
