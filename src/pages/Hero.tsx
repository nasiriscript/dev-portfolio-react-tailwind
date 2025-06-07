import React, { lazy, Suspense } from "react";
import logoBg from "../assets/images/A_geometric_logo_design_depicting_a_digital_circuit_board_head_on.webp"; // اضافه کردن لوگو

// Preload motion components
const MotionDiv = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.div })));
const MotionSpan = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.span })));

export const Hero: React.FC = () => {
  return (
    <div className="w-full md:w-full lg:w-auto xl:w-auto relative overflow-clip min-h-[100svh] text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]">
      {/* بک‌گراند لوگو با شفافیت */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${logoBg})`,
          backgroundSize: "min(300%,2048px)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.08
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
          <Suspense fallback={
            <div className="w-[200px] h-[200px] mb-4 md:mb-8 mt-12 md:mt-24" />
          }>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mb-4 md:mb-8 mt-12 md:mt-24 w-[200px] h-[200px]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
            </MotionDiv>
          </Suspense>

          <Suspense fallback={
            <div className="max-w-2xl mx-auto w-full h-[400px] flex items-center justify-center">
              <div className="animate-pulse">
                <div className="h-16 bg-white/10 rounded mb-8 w-3/4 mx-auto"></div>
                <div className="h-4 bg-white/10 rounded mb-4 w-1/2 mx-auto"></div>
                <div className="h-4 bg-white/10 rounded w-3/4 mx-auto"></div>
              </div>
            </div>
          }>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-24 min-h-[200px]">
                Hi, We are <br /> Assistio{" "}
                <Suspense fallback={<span className="text-emerald-400">AI</span>}>
                  <MotionSpan
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
                  </MotionSpan>
                </Suspense>
              </h1>
              <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-12 text-shadow-lg drop-shadow-[0_2px_2px_rgba(0,0,0,1)] min-h-[80px]">
                Welcome to Assistio AI, where we harness the power of artificial intelligence to
                transform your ideas into reality.
              </p>

              <div className="flex gap-4 justify-center min-h-[60px]">
                <Suspense fallback={
                  <button className="px-6 py-3 bg-emerald-500 rounded-full font-medium w-[140px] h-[48px]"></button>
                }>
                  <MotionDiv
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-emerald-500 rounded-full font-medium hover:bg-emerald-600 transition-colors"
                  >
                    Contact Me
                  </MotionDiv>
                </Suspense>
                <Suspense fallback={
                  <button className="px-6 py-3 border border-white/20 rounded-full font-medium w-[140px] h-[48px]"></button>
                }>
                  <MotionDiv
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
                  >
                    View Work
                  </MotionDiv>
                </Suspense>
              </div>
            </MotionDiv>
          </Suspense>
        </div>
      </div>
    </div>
  );
};
