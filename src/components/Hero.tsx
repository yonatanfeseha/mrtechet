import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import heroGif from "@/assets/hero.png"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Your Trusted{" "}
              <span className="text-gradient bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Technology Partner
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-lg"
            >
              Turning ideas into powerful digital solutions with custom
              software, web apps, and innovative tech products
            </motion.p>
          </div>

          {/* GIF Section */}
          <div className="flex-1 flex justify-center md:justify-end">
            <motion.img
              src={heroGif}
              alt="Hero Animation"
              className="w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
