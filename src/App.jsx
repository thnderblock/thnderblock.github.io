import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="relative flex h-[200vh] w-full flex-col overflow-hidden">
        <Header />
        <div className="mt-12 h-full w-screen px-[20rem] py-[13rem] text-center">
          <div className="flex w-full justify-center font-gilda text-6xl">
            I work on robotics, software and digital art
          </div>
          <div className="mt-6 flex justify-center font-roboto">
            I’m a student at UNSW, studying mechatronics engineering and
            computer science.
            <br></br>
            Passionate about graphics design and illustration.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
