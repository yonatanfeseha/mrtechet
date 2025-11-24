import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import yoni from "../assets/yoni.jpg";
import dawa from "../assets/dawa.jpg";
import yo from "../assets/yo.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Fiker Behailu",
      role: "project Manager",
      image: dawa,
      bio: "Leads projects to successful completion on time, within budget, and meeting goals.",
      linkedin: "https://www.linkedin.com/in/dawit-tesfaye-9ab23429b",
      email: "mailto:tesfayedawit22090582@gmail.com",
    },
    {
      name: "Yonatan Feseha",
      role: "Fullstack Developer",
      image: yoni,
      bio: "Specializing in backend development and scalable solutions",
      linkedin: "https://www.linkedin.com/in/yonatan-feseha-987229259/",
      email: "mailto:yonatanfeseha@gmail.com",
    },
    {
      name: "Dawit Tesfaye",
      role: "Software Engineer",
      image: dawa,
      bio: "Building robust and efficient software solutions",
      linkedin: "https://www.linkedin.com/in/dawit-tesfaye-9ab23429b",
      email: "mailto:tesfayedawit22090582@gmail.com",
    },
    {
      name: "Yonatan worku",
      role: "Production",
      image: yo,
      bio: "movies, documentary, Event Organizing and Production",
      linkedin: "https://www.linkedin.com/in/yonatan-feseha-987229259/",
      email: "mailto:yonatanfeseha@gmail.com",
    },

    {
      name: "assrat denboba",
      role: "Graphic Designer",
      image: yoni,
      bio: "specializing in video editing and motion graphic",
      linkedin: "https://www.linkedin.com/in/yonatan-feseha-987229259/",
      email: "mailto:yonatanfeseha@gmail.com",
    },
    {
      name: "fikadu asrat",
      role: "UI/UX Specialist",
      image: dawa,
      bio: "Crafting beautiful user experiences and pixel-perfect interfaces",
      linkedin: "https://www.linkedin.com/in/dawit-tesfaye-9ab23429b",
      email: "mailto:tesfayedawit22090582@gmail.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
    hover: {
      y: -4,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <section id="team" className="py-16 bg-background relative">
      <div className="container-custom text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Meet Our{" "}
          <span className="text-gradient bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Dream Team
          </span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Passionate innovators transforming ideas into extraordinary digital
          experiences
        </p>
      </div>

      {/* Flex row grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={`${member.name}-${index}`}
            variants={cardVariants}
            whileHover="hover"
            className="group w-70 relative cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              {/* Pre-hover Name/Role Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm text-center py-1 px-1 transition-all duration-300">
                <h3 className="text-white text-sm font-semibold">
                  {member.name}
                </h3>
                <p className="text-xs text-accent uppercase">{member.role}</p>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-3 gap-1 text-white transition-opacity duration-300"
              >
                <h3 className="text-sm font-semibold">{member.name}</h3>
                <p className="text-xs text-accent font-medium uppercase">
                  {member.role}
                </p>
                <p className="text-xs text-gray-200">{member.bio}</p>
                <div className="flex gap-1 mt-1">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 py-1 px-2 bg-primary/20 hover:bg-primary hover:text-white rounded-md text-xs transition"
                  >
                    <Linkedin className="w-3 h-3" />
                    LinkedIn
                  </a>
                  <a
                    href={member.email}
                    className="flex items-center gap-1 py-1 px-2 bg-purple-600/20 hover:bg-purple-600 hover:text-white rounded-md text-xs transition"
                  >
                    <Mail className="w-3 h-3" />
                    Email
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
