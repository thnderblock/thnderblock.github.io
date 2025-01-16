import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useScroll } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div className="">
        <Header />
        <Hero globalScrollYProgress={scrollYProgress} />
        <div className="h-screen">test </div>
      </div>
    </>
  );
}

export default App;
