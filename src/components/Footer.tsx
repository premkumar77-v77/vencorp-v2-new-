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
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Stay in the Loop
          </h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Get exclusive updates on new features, startup insights, and AI automation trends.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-muted/20 border border-primary/30 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/60 transition-colors duration-300"
            />
            <Button className="btn-futuristic whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">Vencorp</span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              The super app for startups. Empowering entrepreneurs from idea to IPO with AI-first technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-2 glass rounded-xl text-foreground/70 ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 gradient-text">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-lg font-semibold mb-6 gradient-text-secondary">Ecosystem</h4>
            <ul className="space-y-3">
              {ecosystemLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 gradient-text">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/20">
          <div className="text-foreground/60 font-mono mb-4 md:mb-0">
            © 2024 Vencorp. Building the future of startups.
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-foreground/60">Powered by</span>
            <span className="gradient-text font-semibold">AI</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-foreground/60">Made for</span>
            <span className="gradient-text-secondary font-semibold">Gen Z</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;