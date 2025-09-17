import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navItems = [
    { label: "Home", href: "/" },
    { label: "Founders Club", href: "/founders-club" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "AI Automation", href: "/ai-automation" },
    { label: "Contact", href: "/contact" },
    { label: "Responses", href: "/responses" },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass border-b border-primary/20' 
          : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Left */}
        <Link
          to="/"
          className="flex items-center space-x-2"
        >
          <Zap className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold gradient-text">Vencorp</span>
        </Link>

        {/* Navigation Items - Right */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-foreground/70 hover:text-foreground transition-all duration-300 font-medium relative group ${
                location.pathname === item.href ? 'text-foreground' : ''
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-neon-cyan transition-all duration-300 group-hover:w-full ${
                location.pathname === item.href ? 'w-full' : 'w-0'
              }`}></span>
            </Link>
          ))}
        </nav>



        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-primary/20">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium ${
                  location.pathname === item.href ? 'text-foreground' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </header>


    </>
  );
};

export default Header;