import React from "react";
import { motion } from "framer-motion";
import logoBg from "../assets/images/A_geometric_logo_design_depicting_a_digital_circuit_board_head_on.webp"; // اضافه کردن لوگو

export const Hero: React.FC = () => {
  return (
    <div className="w-full md:w-full lg:w-auto xl:w-auto relative overflow-clip min-h-[100svh] text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]">
      {/* Optimized background image loading */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${logoBg})`,
          backgroundSize: "min(300%,2048px)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
          willChange: "transform"
        }}
      />

      {/* نیم‌دایره پشت همه چیز */}
      <div
        className="absolute z-0 bg-black w-[2400px] h-[1500px] rounded-[50%] left-1/2 -translate-x-1/2 
                      bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px]
                      border-[1px] border-[#8CD6DE]/30"
      />

      <div className="container relative mx-auto px-4 pt-8 md:pt-12 pb-12 md:pb-24 min-h-[100svh] flex items-center">
        <div className="flex flex-col items-center justify-center text-center z-10 w-full">
          {/* Deferred animation for the logo glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-4 md:mb-8 mt-12 md:mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
          </motion.div>

          {/* Main content with optimized animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-28 mt-12">
              Hi, We are <br /> Assistio{" "}
              <motion.span
                initial={{ filter: "drop-shadow(0px 0px 4px rgba(34,197,94,0.4))" }}
                animate={{
                  filter: [
                    "drop-shadow(0px 0px 2px rgba(34,197,94,0.4))",
                    "drop-shadow(0px 0px 8px rgba(22,160,72,0.6))",
                    "drop-shadow(0px 0px 2px rgba(34,197,94,0.4))"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                className="text-emerald-400"
              >
                AI
              </motion.span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-12">
              Welcome to Assistio AI, where we harness the power of artificial intelligence to
              transform your ideas into reality.
            </p>

            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-emerald-500 rounded-full font-medium hover:bg-emerald-600 transition-colors"
              >
                Contact Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                View Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
