import { forwardRef, useState } from "react";
import { Brain, Building2, Cog, DollarSign, Zap, Cpu, Database, Rocket, ExternalLink, ArrowLeft, Play, BookOpen, Users, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Ecosystem = forwardRef<HTMLElement>((props, ref) => {
  const [selectedApp, setSelectedApp] = useState<number | null>(null);
  const ecosystemApps = [
    {
      title: "PragatiAI",
      description: "AI-powered idea validation with real-time market analysis and predictive modeling.",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-primary to-neon-cyan",
      features: ["AI Validation", "Market Analysis", "Risk Assessment"],
      detailedDescription: "PragatiAI is a revolutionary platform that leverages artificial intelligence to validate business ideas and provide comprehensive market analysis. Our advanced algorithms analyze market trends, competitor landscapes, and consumer behavior to give you actionable insights.",
      howToUse: [
        "Upload your business idea or pitch deck",
        "Our AI analyzes market viability and competition",
        "Get detailed reports with risk assessments",
        "Receive actionable recommendations for improvement",
        "Track progress with real-time market updates"
      ],
      productLinks: [
        { label: "Documentation", url: "https://docs.pragati.vencorp.com", type: "secondary" },
        { label: "Video Tutorial", url: "https://tutorials.vencorp.com/pragati", type: "video" }
      ],
      stats: [
        { label: "Ideas Validated", value: "10,000+" },
        { label: "Success Rate", value: "85%" },
        { label: "Time Saved", value: "90%" }
      ]
    },
    {
      title: "Stello",
      description: "Complete business operations suite with automated workflows and smart analytics.",
      icon: <Building2 className="w-8 h-8" />,
      gradient: "from-neon-cyan to-neon-pink",
      features: ["Operations Hub", "Smart Analytics", "Workflow Automation"],
      detailedDescription: "Stello transforms how businesses operate by providing an all-in-one platform for managing operations, analytics, and workflows. Built for modern startups that need agility and intelligence.",
      howToUse: [
        "Connect your existing tools and data sources",
        "Set up automated workflows for common tasks",
        "Monitor performance through smart dashboards",
        "Get AI-powered insights and recommendations",
        "Scale operations as your business grows"
      ],
      productLinks: [
        { label: "Launch Stello", url: "https://stello.vencorp.com", type: "primary" },
        { label: "Integration Guide", url: "https://docs.stello.vencorp.com", type: "secondary" },
        { label: "Demo Video", url: "https://demo.stello.vencorp.com", type: "video" }
      ],
      stats: [
        { label: "Businesses Managed", value: "5,000+" },
        { label: "Time Efficiency", value: "75%" },
        { label: "Cost Reduction", value: "40%" }
      ],
      products: [
        {
          name: "Surveyor",
          description: "Advanced survey and data collection platform with real-time analytics and automated reporting.",
          icon: <Brain className="w-6 h-6" />,
          features: ["Survey Builder", "Real-time Analytics", "Automated Reports", "Data Visualization"],
          link: "https://surveyor.stello.vencorp.com"
        },
        {
          name: "Procurement",
          description: "Streamlined procurement management with vendor tracking and automated purchase workflows.",
          icon: <Building2 className="w-6 h-6" />,
          features: ["Vendor Management", "Purchase Orders", "Approval Workflows", "Cost Analysis"],
          link: "https://procurement.stello.vencorp.com"
        },

        {
          name: "Reimbursement",
          description: "Intelligent expense reimbursement system with automated approval and payment processing.",
          icon: <DollarSign className="w-6 h-6" />,
          features: ["Expense Tracking", "Auto Approval", "Payment Processing", "Receipt Management"],
          link: "https://reimbursement.stello.vencorp.com"
        },
        {
          name: "Calendar",
          description: "Smart calendar management with meeting scheduling and resource booking capabilities.",
          icon: <Clock className="w-6 h-6" />,
          features: ["Meeting Scheduler", "Resource Booking", "Calendar Sync", "Reminder System"],
          link: "https://calendar.stello.vencorp.com"
        },
        {
          name: "Chat",
          description: "Real-time communication platform with team collaboration and file sharing features.",
          icon: <Zap className="w-6 h-6" />,
          features: ["Real-time Messaging", "File Sharing", "Team Channels", "Video Calls"],
          link: "https://chat.stello.vencorp.com"
        },
        {
          name: "Forms",
          description: "Dynamic form builder with conditional logic and automated data processing capabilities.",
          icon: <Cog className="w-6 h-6" />,
          features: ["Form Builder", "Conditional Logic", "Data Processing", "Integration APIs"],
          link: "https://forms.stello.vencorp.com"
        }
      ]
    },
    {
      title: "Stacia Corp",
      description: "Expert consultancy for cutting-edge software, electronics, and mechanical solutions.",
      icon: <Cog className="w-8 h-8" />,
      gradient: "from-neon-pink to-primary",
      features: ["Expert Consulting", "Tech Solutions", "Project Management"],
      detailedDescription: "Stacia Corp provides world-class consultancy services specializing in advanced technology solutions. Our team of experts helps startups implement cutting-edge software, electronics, and mechanical engineering solutions.",
      howToUse: [
        "Schedule a consultation with our experts",
        "Define your technical requirements and goals",
        "Receive a customized solution blueprint",
        "Work with our team on implementation",
        "Get ongoing support and maintenance"
      ],
      productLinks: [
        { label: "Service Portfolio", url: "https://stacia.vencorp.com/services", type: "secondary" },
        { label: "Case Studies", url: "https://stacia.vencorp.com/cases", type: "video" }
      ],
      stats: [
        { label: "Projects Delivered", value: "500+" },
        { label: "Client Satisfaction", value: "98%" },
        { label: "Expert Engineers", value: "50+" }
      ]
    },
    {
      title: "Investor Portal",
      description: "AI-matched funding opportunities with automated pitch optimization and deal tracking.",
      icon: <DollarSign className="w-8 h-8" />,
      gradient: "from-primary to-electric-blue",
      features: ["VC Matching", "Pitch Optimization", "Deal Tracking"],
      comingSoon: true,
      detailedDescription: "Our Investor Portal connects startups with the right investors using AI-powered matching. Get your pitch optimized by our algorithms and track your funding journey with comprehensive analytics.",
      howToUse: [
        "Upload your pitch deck and business plan",
        "Get AI-powered pitch optimization suggestions",
        "Browse matched investor opportunities",
        "Track applications and investor responses",
        "Manage term sheets and deal negotiations"
      ],
      productLinks: [
        { label: "Access Portal", url: "https://investors.vencorp.com", type: "primary" },
        { label: "Pitch Guide", url: "https://guide.investors.vencorp.com", type: "secondary" },
        { label: "Success Stories", url: "https://stories.investors.vencorp.com", type: "video" }
      ],
      stats: [
        { label: "Funding Raised", value: "$2B+" },
        { label: "Successful Matches", value: "1,200+" },
        { label: "Average Deal Time", value: "45 days" }
      ]
    }
  ];

  const techStack = [
    { icon: <Cpu className="w-6 h-6" />, label: "AI/ML Core" },
    { icon: <Database className="w-6 h-6" />, label: "Real-time Data" },
    { icon: <Zap className="w-6 h-6" />, label: "Lightning Fast" },
    { icon: <Rocket className="w-6 h-6" />, label: "Scalable" }
  ];

  return (
    <section ref={ref} id="ecosystem" className="py-32 bg-background section-hidden">
      <div className="container mx-auto px-6">
        {selectedApp === null ? (
          // Main Ecosystem View
          <>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text-secondary">Holistic Ecosystem</span>
              </h2>
              <p className="text-xl text-foreground/70 mb-8 font-mono">
                Every tool you need, powered by AI ⚡
              </p>
              <p className="text-lg text-foreground/60 max-w-4xl mx-auto leading-relaxed">
                From idea validation to IPO - our integrated ecosystem covers every stage 
                of your startup journey with intelligent automation.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex justify-center mb-16">
              <div className="flex space-x-8 glass p-6 rounded-3xl">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 text-primary">
                    {tech.icon}
                    <span className="font-medium text-sm">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {ecosystemApps.map((app, index) => (
                <div 
                  key={index} 
                  className={`bento-card group hover-lift relative overflow-hidden ${
                    app.comingSoon ? 'cursor-default opacity-80' : 'cursor-pointer'
                  }`} 
                  onClick={() => app.comingSoon ? null : setSelectedApp(index)}
                >
                  {/* Coming Soon Badge */}
                  {app.comingSoon && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-gradient-to-r from-neon-pink to-primary text-primary-foreground px-3 py-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 glass rounded-2xl text-primary transition-all duration-500 ${
                        app.comingSoon ? '' : 'group-hover:scale-110'
                      }`}>
                        {app.icon}
                      </div>
                      <h3 className="text-3xl font-bold gradient-text">{app.title}</h3>
                    </div>
                    
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {app.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 text-xs font-medium glass rounded-full text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`flex items-center text-sm font-medium transition-colors ${
                      app.comingSoon 
                        ? 'text-foreground/40' 
                        : 'text-primary/60 group-hover:text-primary'
                    }`}>
                      <span>{app.comingSoon ? 'Available Soon' : 'Click to explore'}</span>
                      {!app.comingSoon && (
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Detailed App View
          <DetailedAppView 
            app={ecosystemApps[selectedApp]} 
            onBack={() => setSelectedApp(null)} 
          />
        )}
      </div>
    </section>
  );
});

// Detailed App View Component
interface DetailedAppViewProps {
  app: {
    title: string;
    detailedDescription: string;
    icon: React.ReactNode;
    gradient: string;
    howToUse: string[];
    productLinks: { label: string; url: string; type: string }[];
    stats: { label: string; value: string }[];
    features: string[];
    comingSoon?: boolean;
    products?: {
      name: string;
      description: string;
      icon: React.ReactNode;
      features: string[];
      link: string;
    }[];
  };
  onBack: () => void;
}

const DetailedAppView: React.FC<DetailedAppViewProps> = ({ app, onBack }) => {
  // Handle Coming Soon products
  if (app.comingSoon) {
    return (
      <div className="animate-fade-in-up">
        {/* Back Button */}
        <Button 
          onClick={onBack}
          className="btn-ghost-futuristic mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Ecosystem
        </Button>

        {/* Coming Soon Page */}
        <div className="text-center py-20">
          <div className="flex justify-center mb-8">
            <div className={`p-8 glass rounded-3xl text-primary bg-gradient-to-br ${app.gradient} bg-opacity-10 relative`}>
              <div className="scale-150">
                {app.icon}
              </div>
              <div className="absolute -top-2 -right-2">
                <Badge className="bg-gradient-to-r from-neon-pink to-primary text-primary-foreground px-2 py-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Coming Soon
                </Badge>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">{app.title}</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
            {app.detailedDescription}
          </p>
          
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold gradient-text">Coming Soon</h2>
              </div>
              
              <p className="text-foreground/70 text-lg mb-6">
                We're working hard to bring you this amazing product. Stay tuned for updates!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <Badge variant="outline" className="bg-background/50 border-primary/30 text-foreground/70">
                    🚀 In Development
                  </Badge>
                  <Badge variant="outline" className="bg-background/50 border-primary/30 text-foreground/70">
                    📅 Q2 2024
                  </Badge>
                  <Badge variant="outline" className="bg-background/50 border-primary/30 text-foreground/70">
                    🎯 Enterprise Ready
                  </Badge>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="btn-ghost-futuristic">
                  <span>Notify Me When Available</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'secondary':
        return <BookOpen className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getLinkStyle = (type: string) => {
    switch (type) {
      case 'primary':
        return 'btn-futuristic';
      case 'video':
        return 'btn-ghost-futuristic border-neon-pink/30 text-neon-pink hover:border-neon-pink/60';
      default:
        return 'btn-ghost-futuristic';
    }
  };

  // Special case: Show only products for Stello
  if (app.title === 'Stello') {
    return (
      <div className="animate-fade-in-up">
        {/* Back Button */}
        <Button 
          onClick={onBack}
          className="btn-ghost-futuristic mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Ecosystem
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className={`p-6 glass rounded-3xl text-primary bg-gradient-to-br ${app.gradient} bg-opacity-10`}>
              <div className="scale-150">
                {app.icon}
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Products Under {app.title}</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive suite of business management tools
          </p>
        </div>

        {/* Products Section - Only for Stello */}
        {app.products && (
          <Card className="glass">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {app.products.map((product, index) => (
                  <Card key={index} className="glass hover:scale-105 transition-all duration-300 cursor-pointer group" onClick={() => window.open(product.link, '_blank')}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 glass rounded-lg text-primary group-hover:scale-110 transition-transform">
                          {product.icon}
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                      </div>
                      
                      <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                        {product.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.features.map((feature, featureIndex) => (
                          <Badge 
                            key={featureIndex}
                            variant="outline"
                            className="text-xs bg-background/50 border-primary/30 text-foreground/60"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-primary/60 text-sm font-medium group-hover:text-primary transition-colors">
                        <span>Launch Product</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // Default view for other products (not Stello)
  return (
    <div className="animate-fade-in-up">
      {/* Launch PragatiAI Button - Top Right (only for PragatiAI) */}
      {app.title === 'PragatiAI' && (
        <div className="flex justify-end mb-4">
          <Button 
            onClick={() => window.open('https://pragati.vencorp.com', '_blank')}
            className="bg-gradient-to-r from-primary to-neon-cyan text-primary-foreground hover:from-primary/90 hover:to-neon-cyan/90 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-4 h-4" />
            Launch PragatiAI
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Launch Stacia Corp Button - Top Right (only for Stacia Corp) */}
      {app.title === 'Stacia Corp' && (
        <div className="flex justify-end mb-4">
          <Button 
            onClick={() => window.open('https://stacia.vencorp.com', '_blank')}
            className="bg-gradient-to-r from-primary to-neon-cyan text-primary-foreground hover:from-primary/90 hover:to-neon-cyan/90 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-4 h-4" />
            Launch Stacia Corp
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Back Button */}
      <Button 
        onClick={onBack}
        className="btn-ghost-futuristic mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Ecosystem
      </Button>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className={`p-6 glass rounded-3xl text-primary bg-gradient-to-br ${app.gradient} bg-opacity-10`}>
            <div className="scale-150">
              {app.icon}
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">{app.title}</h1>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          {app.detailedDescription}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {app.stats.map((stat, index) => (
          <Card key={index} className="glass text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-foreground/60">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* How to Use */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Users className="w-6 h-6 mr-3 text-primary" />
              How to Use
            </CardTitle>
            <CardDescription className="text-foreground/60">
              Step-by-step guide to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {app.howToUse.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-neon-cyan flex items-center justify-center text-xs font-bold text-background">
                    {index + 1}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Star className="w-6 h-6 mr-3 text-primary" />
              Key Features
            </CardTitle>
            <CardDescription className="text-foreground/60">
              What makes this product special
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {app.features.map((feature, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="justify-start p-3 bg-background/50 border-primary/30 text-foreground/80 hover:border-primary/60"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Product Links */}
      <Card className="glass mb-8">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Get Started Today</CardTitle>
          <CardDescription className="text-center text-foreground/60">
            Access the platform and resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {app.productLinks.map((link, index) => (
              <Button 
                key={index}
                className={`group ${getLinkStyle(link.type)}`}
                onClick={() => window.open(link.url, '_blank')}
              >
                {getLinkIcon(link.type)}
                <span className="ml-2">{link.label}</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Products Section - Only show for Stello */}
      {app.products && (
        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Products Under {app.title}</CardTitle>
            <CardDescription className="text-center text-foreground/60">
              Comprehensive suite of business management tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {app.products.map((product, index) => (
                <Card key={index} className="glass hover:scale-105 transition-all duration-300 cursor-pointer group" onClick={() => window.open(product.link, '_blank')}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 glass rounded-lg text-primary group-hover:scale-110 transition-transform">
                        {product.icon}
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                    </div>
                    
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex}
                          variant="outline"
                          className="text-xs bg-background/50 border-primary/30 text-foreground/60"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-primary/60 text-sm font-medium group-hover:text-primary transition-colors">
                      <span>Launch Product</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

Ecosystem.displayName = "Ecosystem";

export default Ecosystem;