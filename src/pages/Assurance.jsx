import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Gem, Leaf, Scale } from 'lucide-react';

const assuranceData = [
  {
    id: 1,
    title: "Quality Craftsmanship",
    icon: <Gem size={32} />,
    desc: "Handcrafted by master artisans"
  },
  {
    id: 2,
    title: "Ethically Sourced",
    icon: <Leaf size={32} />,
    desc: "Conflict-free and responsible"
  },
  {
    id: 3,
    title: "100% Transparency",
    icon: <Scale size={32} />,
    desc: "Fair pricing, zero hidden costs"
  },
  {
    id: 4,
    title: "Lifetime Assurance",
    icon: <ShieldCheck size={32} />,
    desc: "Maintenance & repair support"
  }
];

const Assurance = () => {
  return (
    <section className="bg-[#FDFBF7] py-16 px-6 md:px-12 border-t border-[#832729]/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* === LEFT: Header Section === */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3 text-center lg:text-left"
        >
          <h3 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-2 leading-tight">
            The Sree-Dacca <br />
            <span className="text-[#832729] italic font-medium">Assurance</span>
          </h3>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto lg:mx-0 my-4"></div>
          <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
            Crafted by experts, cherished by you. We promise purity, precision, and perfection in every piece we create.
          </p>
        </motion.div>

        {/* === RIGHT: Icons Grid === */}
        <div className="lg:w-2/3 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {assuranceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full border border-[#832729]/20 flex items-center justify-center text-[#832729] mb-4 bg-white shadow-sm group-hover:bg-[#832729] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                  {item.icon}
                </div>
                
                {/* Text */}
                <h4 className="font-serif text-[#1a1a1a] font-medium text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide opacity-80">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Assurance;