import { motion } from "framer-motion";
import ThreeModel from "./components/ThreeModel";

function App() {
  return (
    <div className="h-screen bg-slate-700">
      <div className="container mx-auto">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
          className="flex justify-between text-white items-center h-16"
        >
          <span className="font-bold text-2xl">Framer Website</span>

          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </motion.header>

        <section className="lg:py-48">
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
                className="text-white lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem]"
              >
                Framer 3d
              </motion.h2>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1.3, delay: 0.8 }}
                className="text-white lg:max-w-[40rem] lg:text-5xl font-bold"
              >
                The <span className="text-orange-600">next</span> generation
              </motion.p>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1.1, delay: 0.9 }}
                className="flex items-center gap-4"
              >
                <button className="py-3 px-6 rounded-md border-2 my-4 hover:translate-y-1 duration-150">
                  <span className="font-bold text-white">More Details</span>
                </button>

                <button className="py-3 px-6 rounded-md border-2 my-4 border-orange-500 hover:translate-y-1 duration-150">
                  <span className="font-bold text-orange-500">samples</span>
                </button>
              </motion.div>
            </div>

            <div>
              <ThreeModel />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
