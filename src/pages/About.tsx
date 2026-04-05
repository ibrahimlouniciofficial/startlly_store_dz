import { motion } from 'motion/react';
import { ShieldCheck, Users, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full pt-20 pb-32 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">About Startlly Store</h1>
          <p className="text-xl text-gray-300">More than just a store. We are your digital growth partner.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We're not just a store selling you a digital product; we offer reliable service, professional treatment, and practical advice that develops your skills and helps you turn your ideas into real projects.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We understand the struggles of Algerian creators, students, and freelancers: limited international payment options, expensive USD pricing, and the fear of scams. Startlly Store was born to solve these problems, providing safe, affordable, and instant access to the world's best digital tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: ShieldCheck, title: 'Trust & Security', desc: '100% guaranteed subscriptions with full support throughout your billing cycle.' },
            { icon: Users, title: 'Local Understanding', desc: 'We accept local payment methods (CCP, BaridiMob, Flexy) to make your life easier.' },
            { icon: Target, title: 'Skill Development', desc: 'We don\'t just sell tools; we want to see you succeed and grow your digital income.' },
            { icon: Heart, title: 'Customer First', desc: 'Fast delivery, clear pricing in DZD, and support in Arabic, French, and English.' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="glass-panel rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-300 mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
