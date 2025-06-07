import { lazy, Suspense } from "react";
import { SiFramer, SiFigma, SiReact, SiNodedotjs } from "react-icons/si";
import { FaLemon } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Lazy load motion components
const MotionDiv = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.div })));

const stackItems = [
  {
    id: 1,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 2,
    name: "Figma",
    icon: <SiFigma size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 4,
    name: "Node.js",
    icon: <SiNodedotjs size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 5,
    name: "Lemon Squeezy",
    icon: <FaLemon size={100} />,
    color: "text-emerald-200",
  },
];

export const Stack = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section
      className="py-24 md:py-64 max-w-[1200px] mx-auto text-center"
      id="stack"
    >
      <h2 className="text-7xl text-gray-100 font-bold mb-20">My Stack</h2>
      <div className="flex flex-wrap justify-center gap-8" ref={ref}>
        {stackItems.map((item, index) => (
          <Suspense key={item.id} fallback={
            <div className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg">
              <div className={`mb-4 ${item.color}`}>{item.icon}</div>
              <p className="text-white/20 text-xl">{item.name}</p>
            </div>
          }>
            <MotionDiv
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: (index) => ({
                  opacity: 0,
                  y: index % 2 === 0 ? -100 : 100,
                }),
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.5,
                  },
                },
              }}
              className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`mb-4 ${item.color}`}>{item.icon}</div>
              <p className="text-white/20 text-xl">{item.name}</p>
            </MotionDiv>
          </Suspense>
        ))}
      </div>
    </section>
  );
};
