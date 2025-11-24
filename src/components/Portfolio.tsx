import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smart Restaurant System",
    category: "Mr Menu",
    description:
      "Digital menu and ordering system with kitchen management integration.",
    tags: ["React", "Node.js", "QR Codes", "Real-time"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Digital Business Cards",
    category: "Mr Card",
    description:
      "NFC-enabled digital business card platform with contact management.",
    tags: ["React", "NFC", "Analytics"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Gym Mannagment System",
    category: "Enterprise web app",
    description:
      "Comprehensive gym management system with member tracking and scheduling.",
    tags: ["React", "Node.js", "Firebase"],
    color: "from-yellow-500 to-orange-500",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover-lift bg-card h-full cursor-pointer">
        {/* Gradient Header */}
        <div className={`h-2 bg-gradient-to-r ${project.color}`} />

        {/* Animated Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        <div className="p-6 relative z-10">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-4">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Link */}
          <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
            <span>View Case Study</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </Card>
    </motion.div>
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
            Featured{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our portfolio of successful projects that showcase our
            expertise in delivering innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
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
