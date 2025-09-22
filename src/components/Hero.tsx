import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Cpu, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const subtitles = [
    "AI-First ecosystem for next-gen entrepreneurs",
    "Automate everything,focus on what matters",
    "From startup to unicorn in record time",
    "Where innovation meets automation",
    "proud partners of SVCE"
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 25 : 75;
    const currentFullSubtitle = subtitles[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentFullSubtitle.length) {
        setCurrentSubtitle(currentFullSubtitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentSubtitle(currentFullSubtitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentFullSubtitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % subtitles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, subtitles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-futuristic px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 border border-primary/30 rounded-full floating animate-pulse-glow"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-6 sm:w-8 h-6 sm:h-8 bg-neon-cyan/20 rounded-full floating-delay"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-1/4 w-8 sm:w-12 h-8 sm:h-12 border border-neon-pink/40 rotate-45 floating"></div>
        <Sparkles className="absolute top-1/3 right-1/3 w-4 sm:w-6 h-4 sm:h-6 text-primary/60 floating-delay" />
        <Cpu className="absolute bottom-1/4 right-5 sm:right-10 w-6 sm:w-8 h-6 sm:h-8 text-neon-cyan/50 floating" />
        <Rocket className="absolute top-10 sm:top-20 right-1/4 w-4 sm:w-6 h-4 sm:h-6 text-neon-pink/60 floating-delay" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-[10rem] 4xl:text-[12rem] font-bold leading-tight animate-fade-in-up">
            <span className="gradient-text block mb-2 sm:mb-4">Vencorp</span>
            <span className="text-foreground block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-normal">
              The Super App for
            </span>
            <span className="gradient-text-secondary block">Startups</span>
          </h1>

          {/* Animated Subtitle */}
          <div className="min-h-[2rem] sm:min-h-[3rem] flex items-center justify-center px-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-foreground/80 font-mono break-words">
              {currentSubtitle}
              <span className="typing-cursor ml-1"></span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 animate-fade-in-up pt-6 sm:pt-8">
            <Link to="/founders-club">
              <Button className="btn-futuristic group w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4">
                <span>Join the Founders Club</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/ecosystem">
              <Button className="btn-ghost-futuristic group w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4">
                <Sparkles className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                <span>Explore Ecosystem</span>
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-12 sm:pt-16 animate-fade-in-up">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold gradient-text font-mono">10K+</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-foreground/60 font-medium mt-1 sm:mt-2">Active Founders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold gradient-text-secondary font-mono">$2B+</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-foreground/60 font-medium mt-1 sm:mt-2">Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold gradient-text font-mono">98%</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-foreground/60 font-medium mt-1 sm:mt-2">AI Automation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 sm:w-6 h-8 sm:h-10 border-2 border-primary/50 rounded-full relative">
          <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-primary rounded-full absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;