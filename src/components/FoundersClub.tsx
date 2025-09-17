import { forwardRef, useState } from "react";
import { Users, BookOpen, MessageCircle, TrendingUp, Network, Lightbulb, X, Mail, User, Building, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FoundersClub = forwardRef<HTMLElement>((props, ref) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    stage: '',
    industry: '',
    website: '',
    phone: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create response object
    const response = {
      id: Date.now().toString(),
      type: 'founders-club' as const,
      timestamp: new Date().toISOString(),
      data: {
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        startupStage: formData.stage,
        industry: formData.industry,
        website: formData.website,
        phone: formData.phone,
        description: formData.description
      }
    };
    
    // Store in localStorage
    const existingResponses = localStorage.getItem('vencorp_responses');
    let responses = [];
    
    if (existingResponses) {
      try {
        responses = JSON.parse(existingResponses);
      } catch (error) {
        console.error('Error parsing existing responses:', error);
        responses = [];
      }
    }
    
    responses.push(response);
    localStorage.setItem('vencorp_responses', JSON.stringify(responses));
    
    console.log('Form submitted:', formData);
    console.log('Stored response:', response);
    
    alert('Application submitted successfully! We\'ll be in touch soon.');
    setIsFormOpen(false);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      company: '',
      role: '',
      stage: '',
      industry: '',
      website: '',
      phone: '',
      description: ''
    });
  };
  const features = [
    {
      icon: <Network className="w-10 h-10" />,
      title: "Elite Network",
      description: "Join 10K+ verified founders, serial entrepreneurs, and unicorn builders in our exclusive community.",
      color: "text-primary"
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "AI-Powered Learning",
      description: "Personalized masterclasses, workshops, and content curated by our AI to match your startup stage.",
      color: "text-neon-cyan"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Investor Access",
      description: "Direct pipeline to $2B+ in VC funding with automated pitch matching and deal flow optimization.",
      color: "text-neon-pink"
    }
  ];

  const stats = [
    { value: "10K+", label: "Active Founders" },
    { value: "$2B+", label: "Funding Raised" },
    { value: "500+", label: "VCs Connected" },
    { value: "98%", label: "Success Rate" }
  ];

  const founders = [
    {
      name: "Alex Chen",
      title: "CEO & Co-Founder",
      company: "TechFlow AI",
      industry: "AI/ML",
      stage: "Series A",
      description: "Building next-gen AI automation tools for enterprise workflows.",
      avatar: "AC",
      color: "from-primary to-neon-cyan"
    },
    {
      name: "Sarah Williams",
      title: "Founder & CEO",
      company: "GreenTech Solutions",
      industry: "CleanTech",
      stage: "Seed",
      description: "Revolutionizing renewable energy storage with breakthrough battery tech.",
      avatar: "SW",
      color: "from-neon-cyan to-neon-pink"
    },
    {
      name: "Marcus Johnson",
      title: "Co-Founder & CTO",
      company: "HealthVault",
      industry: "HealthTech",
      stage: "Series B",
      description: "Secure, AI-powered patient data management for healthcare providers.",
      avatar: "MJ",
      color: "from-neon-pink to-primary"
    },
    {
      name: "Emily Rodriguez",
      title: "Founder",
      company: "FinanceFlow",
      industry: "FinTech",
      stage: "Series A",
      description: "Democratizing investment strategies through intelligent automation.",
      avatar: "ER",
      color: "from-electric-blue to-primary"
    },
    {
      name: "David Kim",
      title: "CEO & Founder",
      company: "LogiChain",
      industry: "Supply Chain",
      stage: "Pre-Seed",
      description: "Blockchain-powered supply chain transparency and optimization.",
      avatar: "DK",
      color: "from-primary to-electric-blue"
    },
    {
      name: "Lisa Patel",
      title: "Co-Founder & CEO",
      company: "EduTech Pro",
      industry: "EdTech",
      stage: "Seed",
      description: "Personalized learning platforms powered by adaptive AI algorithms.",
      avatar: "LP",
      color: "from-neon-cyan to-electric-blue"
    }
  ];

  const eliteContributors = [
    {
      name: "James Mitchell",
      title: "Serial Entrepreneur & Angel Investor",
      company: "Mitchell Ventures",
      industry: "Multi-Sector",
      stage: "Investor",
      description: "Mentored 200+ startups, led $50M+ in investments. Active community builder and thought leader.",
      avatar: "JM",
      color: "from-yellow-400 to-orange-500",
      contributions: ["Mentorship Program", "Investment Network", "Weekly Workshops"]
    },
    {
      name: "Dr. Priya Sharma",
      title: "Founder & Chief Innovation Officer",
      company: "BioTech Innovations",
      industry: "BioTech",
      stage: "Series C",
      description: "Pioneered breakthrough medical devices. Shares expertise through exclusive masterclasses and R&D insights.",
      avatar: "PS",
      color: "from-purple-500 to-pink-500",
      contributions: ["Research Insights", "Medical Tech Talks", "Innovation Labs"]
    },
    {
      name: "Robert Thompson",
      title: "Founder & Former CEO",
      company: "CloudScale (Acquired)",
      industry: "SaaS",
      stage: "Exit",
      description: "Built and sold CloudScale for $2.8B. Now focuses on helping next-gen founders scale globally.",
      avatar: "RT",
      color: "from-emerald-500 to-teal-500",
      contributions: ["Scaling Strategies", "Exit Planning", "Global Expansion"]
    },
    {
      name: "Maria Gonzalez",
      title: "Co-Founder & Chief Strategy Officer",
      company: "RetailTech Plus",
      industry: "E-commerce",
      stage: "Series B",
      description: "E-commerce innovation leader. Organizes exclusive networking events and strategic partnerships.",
      avatar: "MG",
      color: "from-blue-500 to-indigo-500",
      contributions: ["Strategic Partnerships", "Network Events", "Industry Connections"]
    }
  ];

  return (
    <section ref={ref} id="founders-club" className="py-32 bg-background section-hidden">
      <div className="container mx-auto px-6">
        {/* Join Elite Network Button - Top Right */}
        <div className="flex justify-end mb-8">
          <Button 
            className="bg-gradient-to-r from-primary to-neon-cyan text-primary-foreground hover:from-primary/90 hover:to-neon-cyan/90 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl text-lg"
            onClick={() => setIsFormOpen(true)}
          >
            Join Elite Network →
          </Button>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">The Founders Club</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 mb-4 font-mono">
            A "YPO for Startups" 🚀
          </p>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            Elite community-driven platform for next-gen entrepreneurs. Access vetted networks, 
            AI-powered insights, and exclusive investor connections.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bento-card text-center floating">
              <div className="text-3xl md:text-4xl font-bold gradient-text font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bento-card group hover-lift">
              <div className={`mb-6 ${feature.color} flex justify-center`}>
                <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-all duration-500">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Elite Contributors */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              <span className="gradient-text">🏆 Elite Contributors</span>
            </h3>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Exceptional founders who actively drive our community forward through mentorship, investments, and knowledge sharing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eliteContributors.map((contributor, index) => (
              <div key={index} className="bento-card group hover-lift relative overflow-hidden">
                {/* Elite Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-background px-3 py-1 rounded-full text-xs font-bold">
                  🌟 Elite
                </div>
                
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${contributor.color} flex items-center justify-center text-background font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {contributor.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-1">{contributor.name}</h4>
                    <p className="text-sm text-foreground/60 mb-1">{contributor.title}</p>
                    <p className="text-primary font-medium text-sm">{contributor.company}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {contributor.industry}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    contributor.stage === 'Investor' ? 'bg-yellow-500/10 text-yellow-600' :
                    contributor.stage === 'Exit' ? 'bg-green-500/10 text-green-600' :
                    'bg-neon-cyan/10 text-neon-cyan'
                  }`}>
                    {contributor.stage}
                  </span>
                </div>
                
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {contributor.description}
                </p>
                
                {/* Contributions */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">Key Contributions:</p>
                  <div className="flex flex-wrap gap-1">
                    {contributor.contributions.map((contribution, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-gradient-to-r from-primary/20 to-neon-cyan/20 text-foreground/80 rounded-md border border-primary/20">
                        {contribution}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founders List */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              <span className="gradient-text-secondary">Meet Our Founders</span>
            </h3>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Connect with visionary entrepreneurs who are building the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((founder, index) => (
              <div key={index} className="bento-card group hover-lift">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${founder.color} flex items-center justify-center text-background font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                    {founder.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-1">{founder.name}</h4>
                    <p className="text-sm text-foreground/60 mb-1">{founder.title}</p>
                    <p className="text-primary font-medium text-sm">{founder.company}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {founder.industry}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-neon-cyan/10 text-neon-cyan rounded-full">
                    {founder.stage}
                  </span>
                </div>
                
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Registration Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-16">
            <div className="bg-background border border-border rounded-2xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto mt-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold gradient-text">Join The Founders Club</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsFormOpen(false)}
                  className="hover:bg-foreground/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="Your full name"
                      className="bg-foreground/5 border-foreground/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="bg-foreground/5 border-foreground/20"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Company *
                    </label>
                    <Input
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                      className="bg-foreground/5 border-foreground/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Role *</label>
                    <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                      <SelectTrigger className="bg-foreground/5 border-foreground/20">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="founder">Founder/Co-Founder</SelectItem>
                        <SelectItem value="ceo">CEO</SelectItem>
                        <SelectItem value="cto">CTO</SelectItem>
                        <SelectItem value="vp">VP/Director</SelectItem>
                        <SelectItem value="entrepreneur">Serial Entrepreneur</SelectItem>
                        <SelectItem value="investor">Angel Investor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Startup Stage</label>
                    <Select value={formData.stage} onValueChange={(value) => handleInputChange('stage', value)}>
                      <SelectTrigger className="bg-foreground/5 border-foreground/20">
                        <SelectValue placeholder="Select stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="idea">Idea Stage</SelectItem>
                        <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                        <SelectItem value="seed">Seed</SelectItem>
                        <SelectItem value="series-a">Series A</SelectItem>
                        <SelectItem value="series-b">Series B+</SelectItem>
                        <SelectItem value="established">Established</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Industry</label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger className="bg-foreground/5 border-foreground/20">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="fintech">FinTech</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="ai">AI/ML</SelectItem>
                        <SelectItem value="blockchain">Blockchain</SelectItem>
                        <SelectItem value="saas">SaaS</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Website
                    </label>
                    <Input
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="https://yourcompany.com"
                      className="bg-foreground/5 border-foreground/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Your phone number"
                      className="bg-foreground/5 border-foreground/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Tell us about your startup</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Brief description of your company, goals, and what you hope to gain from the Founders Club..."
                    className="bg-foreground/5 border-foreground/20 min-h-[100px]"
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsFormOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="btn-futuristic flex-1"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

FoundersClub.displayName = "FoundersClub";

export default FoundersClub;