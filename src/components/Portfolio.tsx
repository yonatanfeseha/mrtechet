import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ras1 from "../assets/ras1.jpg";
import ras2 from "../assets/ras2.jpg";
import ras3 from "../assets/ras3.jpg";
import ras4 from "../assets/ras4.jpg";
import nfc from "../assets/NFC.png";
import menu from "../assets/menu.webp";

const projects = [
  {
    title: "Smart Restaurant System",
    category: "Mr Menu",
    description:
      "Digital menu and ordering system with kitchen management integration.",
    image: menu,
  },
  {
    title: "Digital Business Cards",
    category: "Mr Card",
    description:
      "NFC-enabled digital business card platform with contact management.",
    image: nfc,
  },
  {
    title: "Gym Management System",
    category: "Enterprise web app",
    description:
      "Comprehensive gym management system with member tracking and scheduling.",
    images: [ras1, ras2, ras3, ras4],
  },
];

// Static project card
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="relative overflow-hidden h-72 rounded-xl cursor-pointer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />

        {/* Static content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
          <div>
            <h3 className="text-xl font-bold mb-2 text-black drop-shadow-lg">
              {project.title}
            </h3>
          </div>
          <div>
            <p className="text-sm leading-relaxed mb-3 text-white drop-shadow-[0_0_15px_black]">
              {project.description}
            </p>
            <div className="flex items-center gap-2 font-medium text-white drop-shadow-[0_0_15px_black]">
              <span>View Case Study</span>
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

// Auto-slider card for Gym Management System
const GymSlider = ({ project }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <Card className="relative h-72 overflow-hidden rounded-xl">
      <img
        src={project.images[index]}
        alt={project.title}
        className="w-full h-full object-contain transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />

      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        <div>
          <h3 className="text-xl font-bold mb-2 text-black drop-shadow-lg">
            {project.title}
          </h3>
        </div>
        <div>
          <p className="text-sm mb-3 text-white drop-shadow-[0_0_15px_black]">
            {project.description}
          </p>

          <div className="flex items-center gap-2 font-medium text-white drop-shadow-[0_0_15px_black]">
            <span>View Case Study</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Card>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-black">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our portfolio of successful projects that showcase our
            expertise in delivering innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) =>
            project.images ? (
              <GymSlider key={project.title} project={project} />
            ) : (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
