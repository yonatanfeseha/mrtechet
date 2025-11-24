import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/mrtech-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/yourprofile", label: "Instagram" },
    { icon: Mail, href: "mailto:yourmail@example.com", label: "Email" },
    { icon: MessageCircle, href: "https://t.me/FEKERCJ", label: "Telegram" },
  ];

  return (
    <footer className="bg-navy text-navy-foreground py-12">
      <div className="container-custom text-center">
        {/* Logo */}
        <div className="mb-6">
          <img src={logo} alt="Mr Tech" className="h-10 w-auto mx-auto brightness-0 invert" />
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Your trusted technology partner for innovative digital solutions. Transforming ideas into reality.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <p className="text-sm text-gray-400">
          © {currentYear} Mr Tech.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
