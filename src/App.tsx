import { lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";

// Lazy load non-critical components
const About = lazy(() => import("./pages/About").then(mod => ({ default: mod.About })));
const Portfolio = lazy(() => import("./pages/Portfolio").then(mod => ({ default: mod.Portfolio })));
const Stack = lazy(() => import("./pages/Stack").then(mod => ({ default: mod.Stack })));
const Footer = lazy(() => import("./components/Footer").then(mod => ({ default: mod.Footer })));

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <Stack />
      </Suspense>
      <Suspense fallback={<div className="h-32 bg-black" />}>
        <Footer />
      </Suspense>
    </>
  )
}