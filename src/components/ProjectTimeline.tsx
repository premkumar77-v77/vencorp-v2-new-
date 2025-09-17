import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, TrendingUp, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  status: "planning" | "development" | "testing" | "launched" | "completed";
  date: string;
  timeline: string;
  team: number;
  progress: number;
  tags: string[];
  metrics?: {
    users?: string;
    revenue?: string;
    growth?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered CRM Platform",
    description: "Revolutionary CRM that uses machine learning to predict customer behavior and automate sales processes.",
    status: "launched",
    date: "2024-01-15",
    timeline: "Q1 2024",
    team: 8,
    progress: 100,
    tags: ["AI", "CRM", "SaaS", "B2B"],
    metrics: {
      users: "2.5K+",
      revenue: "$450K",
      growth: "+180%"
    }
  },
  {
    id: 2,
    title: "Sustainable Energy Marketplace",
    description: "Platform connecting renewable energy producers with consumers through blockchain technology.",
    status: "development",
    date: "2024-03-20",
    timeline: "Q2 2024",
    team: 12,
    progress: 75,
    tags: ["Blockchain", "Energy", "Sustainability", "Marketplace"]
  },
  {
    id: 3,
    title: "HealthTech Diagnostic Tool",
    description: "AI-driven medical diagnostic assistant that helps healthcare professionals make faster, more accurate diagnoses.",
    status: "testing",
    date: "2024-05-10",
    timeline: "Q3 2024",
    team: 15,
    progress: 85,
    tags: ["HealthTech", "AI", "Medical", "Diagnostics"]
  },
  {
    id: 4,
    title: "EdTech Learning Platform",
    description: "Personalized learning platform using adaptive AI to customize education paths for individual students.",
    status: "planning",
    date: "2024-07-01",
    timeline: "Q4 2024",
    team: 6,
    progress: 25,
    tags: ["EdTech", "AI", "Education", "Personalization"]
  },
  {
    id: 5,
    title: "Smart City IoT Network",
    description: "Comprehensive IoT infrastructure for smart city management including traffic, energy, and waste systems.",
    status: "development",
    date: "2024-09-15",
    timeline: "Q1 2025",
    team: 20,
    progress: 40,
    tags: ["IoT", "Smart City", "Infrastructure", "Urban Tech"]
  }
];

const statusColors = {
  planning: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  development: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  testing: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  launched: "bg-green-500/20 text-green-300 border-green-500/30",
  completed: "bg-gray-500/20 text-gray-300 border-gray-500/30"
};

const ProjectTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play slideshow
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 3000); // Change slide every 3 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-neon-cyan/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-neon-pink/10 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Project Timeline
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Track our journey from innovative ideas to successful launches. Each project represents
            a milestone in building the future of entrepreneurship.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="btn-ghost-futuristic"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-foreground/20 hover:bg-foreground/40'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="btn-ghost-futuristic"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Slideshow Container */}
        <div className="relative h-[600px] overflow-hidden rounded-2xl">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex 
                  ? 'translate-x-0 opacity-100 z-10' 
                  : index < currentIndex 
                  ? '-translate-x-full opacity-0 z-0'
                  : 'translate-x-full opacity-0 z-0'
              }`}
            >
              <div className="h-full flex items-center justify-center px-4">
                <div className="max-w-4xl w-full">
                  <Card className="glass hover:scale-[1.02] transition-all duration-500 border-primary/20 hover:border-primary/40 h-full">
                    <CardHeader className="space-y-4">
                      <div className="flex justify-between items-start">
                        <Badge className={`${statusColors[project.status]} px-3 py-1`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </Badge>
                        <div className="text-sm text-foreground/60 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.timeline}
                        </div>
                      </div>
                      
                      <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                        {project.title}
                      </CardTitle>
                      
                      <CardDescription className="text-foreground/70 leading-relaxed text-lg">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-foreground/60">Progress</span>
                          <span className="text-primary font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-background/50 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-primary to-neon-cyan h-3 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${index === currentIndex ? project.progress : 0}%`,
                              transitionDelay: index === currentIndex ? '0.5s' : '0s'
                            }}
                          />
                        </div>
                      </div>

                      {/* Project Stats */}
                      <div className="grid grid-cols-2 gap-6 text-sm">
                        <div className="flex items-center text-foreground/60">
                          <Users className="w-5 h-5 mr-2" />
                          <span>{project.team} team members</span>
                        </div>
                        <div className="flex items-center text-foreground/60">
                          <Clock className="w-5 h-5 mr-2" />
                          <span>{project.date}</span>
                        </div>
                      </div>

                      {/* Metrics (for launched projects) */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-4 p-4 border border-primary/20 rounded-xl bg-background/30">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{project.metrics.users}</div>
                            <div className="text-sm text-foreground/60">Users</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-neon-cyan">{project.metrics.revenue}</div>
                            <div className="text-sm text-foreground/60">Revenue</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-neon-pink flex items-center justify-center">
                              <TrendingUp className="w-5 h-5 mr-1" />
                              {project.metrics.growth}
                            </div>
                            <div className="text-sm text-foreground/60">Growth</div>
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-sm bg-background/50 border-primary/30 text-foreground/70 hover:border-primary/60"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Button */}
                      <Button 
                        className="w-full btn-ghost-futuristic group mt-6"
                        disabled={project.status === 'planning'}
                      >
                        <span>
                          {project.status === 'launched' ? 'View Project' : 
                           project.status === 'completed' ? 'Case Study' : 'Learn More'}
                        </span>
                        <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Play/Pause Control */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className="btn-ghost-futuristic"
          >
            {isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
          </Button>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-4 text-foreground/60">
          <span className="text-sm">
            {currentIndex + 1} of {projects.length} projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;