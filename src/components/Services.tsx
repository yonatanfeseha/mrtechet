import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, CreditCard, Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    name: "Mr Tech",
    tagline: "Enterprise Solutions",
    description: "Custom software development, web applications, and digital transformation services tailored to your business needs.",
    features: [
      "Custom Software Development",
      "Web & Mobile Applications",
      "Cloud Solutions & DevOps",
      "API Integration & Development",
    ],
    color: "primary",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: CreditCard,
    name: "Mr Card",
    tagline: "Digital Card Solutions",
    description: "Modern digital business card solutions that make networking seamless, professional, and eco-friendly.",
    features: [
      "Smart Digital Business Cards",
      "NFC & QR Code Technology",
      "Real-time Contact Sharing",
      "Analytics & Insights",
    ],
    color: "accent",
    gradient: "from-accent to-orange-400",
  },
  {
    icon: Menu,
    name: "Mr Menu",
    tagline: "Restaurant Tech",
    description: "Revolutionary digital menu systems and restaurant management solutions for the modern dining experience.",
    features: [
      "Interactive Digital Menus",
      "QR Code Ordering",
      "Menu Management System",
      "Multi-language Support",
    ],
    color: "emerald-500",
    gradient: "from-emerald-500 to-teal-400",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover-lift bg-card h-full">
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
        
        <div className="p-8 relative z-10">
          {/* Icon */}
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-8 w-8 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
            {service.tagline}
          </p>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <div className={`mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br ${service.gradient} flex-shrink-0`} />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button
            variant="ghost"
            className="group/btn px-0 text-primary hover:text-primary-dark hover:bg-transparent"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three powerful brands, one mission: delivering innovative technology solutions
            that drive your business forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
