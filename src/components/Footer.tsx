import { Facebook, Twitter, Linkedin, Github, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Support", href: "#" }
  ];

  const ecosystemLinks = [
    { label: "PragatiAI", href: "#" },
    { label: "Stello", href: "#" },
    { label: "Stacia Corp", href: "#" },
    { label: "Investor Portal", href: "#" }
  ];

  const legalLinks = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
    { label: "Compliance", href: "#" }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter", color: "hover:text-neon-cyan" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn", color: "hover:text-primary" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub", color: "hover:text-neon-pink" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email", color: "hover:text-electric-blue" }
  ];

  return (
    <footer className="relative bg-background border-t border-primary/20">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-3 sm:mb-4">
            Stay in the Loop
          </h3>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Get exclusive updates on new features, startup insights, and AI automation trends.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-md mx-auto px-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-3 sm:px-4 py-3 bg-muted/20 border border-primary/30 rounded-xl text-sm sm:text-base text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/60 transition-colors duration-300"
            />
            <Button className="btn-futuristic whitespace-nowrap text-sm sm:text-base">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">Vencorp</span>
            </div>
            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              The super app for startups. Empowering entrepreneurs from idea to IPO with AI-first technology.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-2 sm:p-3 glass rounded-xl text-foreground/70 ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold gradient-text">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm sm:text-base text-foreground/70 hover:text-foreground transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold gradient-text-secondary">Ecosystem</h4>
            <ul className="space-y-2 sm:space-y-3">
              {ecosystemLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm sm:text-base text-foreground/70 hover:text-foreground transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold gradient-text">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm sm:text-base text-foreground/70 hover:text-foreground transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-primary/20 space-y-4 md:space-y-0">
          <div className="text-xs sm:text-sm text-foreground/60 font-mono text-center md:text-left">
            © 2024 Vencorp. Building the future of startups.
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
            <span className="text-foreground/60">Powered by</span>
            <span className="gradient-text font-semibold">AI</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-foreground/60">Made for</span>
            <span className="gradient-text-secondary font-semibold">Gen Z</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;