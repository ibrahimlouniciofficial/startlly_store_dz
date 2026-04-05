import { motion } from 'motion/react';
import { ShieldCheck, Zap, HeadphonesIcon, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { useState } from 'react';
import ProductModal from '../components/ProductModal';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/30 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-brand-300 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Your Journey Starts Here
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-glow">
              Unlock Premium Tools <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-blue">
                Without Paying Full Price
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium">
              AI Tools, Design Apps & Growth Software at Affordable Prices in Algeria. <br className="hidden md:block"/>
              <span className="text-brand-300">احصل على premium tools بأقل تكلفة ممكنة</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#products"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-900 font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Browse Products <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/213672663742"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2"
              >
                Order via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 font-medium mb-8">Trusted by +1000 clients in Algeria</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold">Secure Payment</h3>
              <p className="text-sm text-gray-400">CCP, BaridiMob, Flexy, RedotPay</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold">Instant Delivery</h3>
              <p className="text-sm text-gray-400">Get access immediately after payment</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <HeadphonesIcon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold">Premium Support</h3>
              <p className="text-sm text-gray-400">Arabic, French & English support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Premium Tools</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Choose from our wide selection of premium subscriptions at a fraction of the original price.</p>
          </div>

          {categories.map(category => (
            <div key={category} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-brand-400 rounded-full"></span>
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.filter(p => p.category === category).map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    <div className={`h-40 bg-gradient-to-br ${product.color} relative overflow-hidden flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <h4 className="relative z-10 text-3xl font-bold text-white text-glow">{product.name}</h4>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4 flex-1">
                        <p className="text-sm text-brand-300 font-medium mb-2">{product.category}</p>
                        <h4 className="text-xl font-bold text-white mb-2">{product.name}</h4>
                        <ul className="space-y-2">
                          {product.features.slice(0, 2).map((feature, i) => (
                            <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-400">Starting from</p>
                          <p className="text-lg font-bold text-white">{product.prices[0].price}</p>
                        </div>
                        <button className="px-4 py-2 rounded-lg bg-white/10 text-white font-medium group-hover:bg-brand-500 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">Four simple steps to get your premium tools.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Choose Product', desc: 'Browse our catalog and select the tool you need.' },
              { step: '02', title: 'Contact Us', desc: 'Send us a message on WhatsApp with your choice.' },
              { step: '03', title: 'Pay Easily', desc: 'Pay via CCP, BaridiMob, Flexy, or RedotPay.' },
              { step: '04', title: 'Receive Instantly', desc: 'Get your account details or activation link immediately.' }
            ].map((item, i) => (
              <div key={i} className="relative p-6 glass-panel rounded-2xl text-center">
                <div className="text-5xl font-black text-white/5 absolute top-4 right-4">{item.step}</div>
                <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-300 font-bold text-xl mx-auto mb-4 relative z-10">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
                <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-900/80"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">Start Your Digital Journey Today</h2>
          <p className="text-xl text-gray-300 mb-10">Join thousands of Algerians who upgraded their skills and workflow with our premium tools.</p>
          <a 
            href="https://wa.me/213672663742"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-brand-400 to-accent-purple text-white font-bold text-xl hover:shadow-[0_0_30px_rgba(176,38,255,0.5)] transition-all scale-100 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Contact Us Now
          </a>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={products.find(p => p.id === selectedProduct)!} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}
