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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo - Left */}
        <Link
          to="/"
          className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
        >
          <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold gradient-text">Vencorp</span>
        </Link>

        {/* Navigation Items - Right */}
        <nav className="hidden md:flex lg:space-x-6 xl:space-x-8 2xl:space-x-10 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm lg:text-base xl:text-lg 2xl:text-xl text-foreground/70 hover:text-foreground transition-all duration-300 font-medium relative group ${
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
            className="text-foreground hover:text-primary transition-colors duration-300 w-10 h-10 sm:w-12 sm:h-12"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-primary/20 backdrop-blur-xl">
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block text-base sm:text-lg text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/5 ${
                  location.pathname === item.href ? 'text-foreground bg-primary/10' : ''
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