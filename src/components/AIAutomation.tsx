import { forwardRef, useState, useEffect } from "react";
import { Brain, FileText, BarChart, Zap, Target, Workflow, ChevronRight, Bot, Cpu, Network, Database, MessageSquare, TrendingUp, Shield, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIAutomation = forwardRef<HTMLElement>((props, ref) => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [currentYear, setCurrentYear] = useState(2024);

  const aiProducts = [
    {
      id: 1,
      icon: <Brain className="w-12 h-12" />,
      title: "Vencorp AI Brain",
      category: "Neural Processing",
      year: "2024",
      quarter: "Q1",
      description: "Revolutionary neural networks that understand context, predict outcomes, and automate complex decision-making processes with unprecedented accuracy.",
      features: ["Deep Learning", "Natural Language Processing", "Pattern Recognition", "Predictive Modeling"],
      metrics: { accuracy: "98.5%", speed: "< 100ms", efficiency: "300x faster" },
      color: "from-primary to-neon-cyan",
      bgColor: "bg-gradient-to-br from-primary/10 to-neon-cyan/10",
      status: "Active",
      milestone: "Foundation"
    },
    {
      id: 2,
      icon: <Bot className="w-12 h-12" />,
      title: "AutoFlow Engine",
      category: "Workflow Automation",
      year: "2024",
      quarter: "Q2",
      description: "Intelligent automation that handles repetitive tasks, optimizes workflows, and scales operations seamlessly across your entire organization.",
      features: ["Process Mining", "Task Automation", "Workflow Optimization", "Smart Scheduling"],
      metrics: { productivity: "5x increase", accuracy: "99.2%", savings: "70% cost" },
      color: "from-neon-cyan to-neon-pink",
      bgColor: "bg-gradient-to-br from-neon-cyan/10 to-neon-pink/10",
      status: "Active",
      milestone: "Automation"
    },
    {
      id: 3,
      icon: <MessageSquare className="w-12 h-12" />,
      title: "ConversaAI",
      category: "Intelligent Communication",
      year: "2024",
      quarter: "Q3",
      description: "Next-generation conversational AI that understands context, emotion, and intent for natural, human-like interactions across all channels.",
      features: ["Sentiment Analysis", "Multi-language Support", "Context Awareness", "Emotional Intelligence"],
      metrics: { satisfaction: "96%", response: "< 2 seconds", languages: "150+" },
      color: "from-neon-pink to-primary",
      bgColor: "bg-gradient-to-br from-neon-pink/10 to-primary/10",
      status: "Active",
      milestone: "Communication"
    },
    {
      id: 4,
      icon: <TrendingUp className="w-12 h-12" />,
      title: "PredictIQ",
      category: "Predictive Analytics",
      year: "2024",
      quarter: "Q4",
      description: "Advanced machine learning models that forecast trends, identify opportunities, and mitigate risks before they impact your business.",
      features: ["Trend Forecasting", "Risk Assessment", "Opportunity Detection", "Market Analysis"],
      metrics: { accuracy: "94.7%", prediction: "30 days ahead", insights: "Real-time" },
      color: "from-primary to-neon-cyan",
      bgColor: "bg-gradient-to-br from-primary/10 to-neon-cyan/10",
      status: "Beta",
      milestone: "Intelligence"
    },
    {
      id: 5,
      icon: <Shield className="w-12 h-12" />,
      title: "SecureAI Guardian",
      category: "AI Security",
      year: "2025",
      quarter: "Q1",
      description: "Intelligent security system that monitors, detects, and prevents threats using advanced AI algorithms and machine learning.",
      features: ["Threat Detection", "Anomaly Analysis", "Real-time Monitoring", "Automated Response"],
      metrics: { detection: "99.8%", response: "< 5 seconds", threats: "1M+ blocked" },
      color: "from-neon-cyan to-neon-pink",
      bgColor: "bg-gradient-to-br from-neon-cyan/10 to-neon-pink/10",
      status: "Coming Soon",
      milestone: "Security"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedProduct((prev) => (prev + 1) % aiProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [aiProducts.length]);

  const platformStats = [
    { value: "50M+", label: "AI Operations Daily", icon: <Cpu className="w-5 h-5" /> },
    { value: "99.99%", label: "Uptime Guarantee", icon: <Network className="w-5 h-5" /> },
    { value: "< 50ms", label: "Average Response", icon: <Zap className="w-5 h-5" /> },
    { value: "24/7", label: "AI Monitoring", icon: <Database className="w-5 h-5" /> }
  ];

  return (
    <section ref={ref} id="automation" className="py-32 bg-background section-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Bot className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-foreground/80">Next-Gen AI Platform</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">AI Automation</span>
            <br />
            <span className="text-4xl md:text-5xl text-foreground/70">Ecosystem</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-6 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered tools designed to revolutionize 
            how you work, automate processes, and scale your business intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-futuristic group">
              <span>Explore Platform</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-primary/20 hover:border-primary">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {platformStats.map((stat, index) => (
            <div key={index} className="bento-card text-center group hover-lift">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-neon-cyan/20 text-primary group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* AI Products Timeline */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono text-foreground/80">Product Evolution Timeline</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our AI Products</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Journey through our AI innovation timeline - from foundational technologies to cutting-edge solutions
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-primary via-neon-cyan to-neon-pink opacity-30"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {aiProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`relative flex items-center group ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  onClick={() => setSelectedProduct(index)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                      selectedProduct === index 
                        ? 'bg-primary border-primary shadow-lg shadow-primary/50 scale-125' 
                        : 'bg-background border-foreground/30 group-hover:border-primary group-hover:scale-110'
                    }`}>
                      <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
                        selectedProduct === index ? 'animate-ping bg-primary/20' : ''
                      }`}></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 cursor-pointer ${
                    index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                  }`}>
                    <div className={`group-hover:scale-105 transition-all duration-500 ${
                      selectedProduct === index ? 'scale-105' : ''
                    }`}>
                      <div className={`relative p-6 rounded-2xl border border-foreground/10 glass overflow-hidden ${
                        selectedProduct === index ? 'ring-2 ring-primary/30 shadow-xl shadow-primary/10' : ''
                      }`}>
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 ${product.bgColor} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                        
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`p-3 rounded-xl bg-gradient-to-br ${product.color} text-white group-hover:scale-110 transition-transform duration-500`}>
                                {product.icon}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold gradient-text mb-1">
                                  {product.title}
                                </h3>
                                <p className="text-sm text-foreground/60">
                                  {product.category}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-mono text-primary font-bold">
                                {product.year} {product.quarter}
                              </div>
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-mono mt-1 ${
                                product.status === 'Active' 
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                  : product.status === 'Beta'
                                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              }`}>
                                {product.status}
                              </span>
                            </div>
                          </div>

                          {/* Milestone Badge */}
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full mb-3">
                            <Calendar className="w-3 h-3 text-primary" />
                            <span className="text-xs font-medium text-foreground/70">
                              Milestone: {product.milestone}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-foreground/70 leading-relaxed mb-4 text-sm">
                            {product.description}
                          </p>

                          {/* Features */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {product.features.slice(0, 3).map((feature, idx) => (
                              <span 
                                key={idx} 
                                className="px-2 py-1 bg-foreground/10 rounded text-xs font-medium text-foreground/60"
                              >
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 3 && (
                              <span className="px-2 py-1 text-xs text-primary font-medium">
                                +{product.features.length - 3} more
                              </span>
                            )}
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {Object.entries(product.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-sm font-bold text-primary">{value}</div>
                                <div className="text-xs text-foreground/60 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>

                          {/* Action Button */}
                          <Button 
                            size="sm" 
                            className="btn-ghost-futuristic group w-full"
                          >
                            <span>Explore Details</span>
                            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Year Label (opposite side) */}
                  <div className={`w-5/12 flex ${
                    index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'
                  }`}>
                    <div className="text-center">
                      <div className="text-2xl font-bold font-mono gradient-text">
                        {product.year}
                      </div>
                      <div className="text-sm text-foreground/60 font-medium">
                        {product.quarter}
                      </div>
                      <div className="text-xs text-foreground/40 mt-1">
                        {product.milestone}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Future Timeline Extension */}
            <div className="relative flex items-center justify-center mt-12">
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 rounded-full border-2 border-dashed border-foreground/30 bg-background">
                  <div className="absolute inset-0 rounded-full animate-pulse bg-primary/20"></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold gradient-text mb-1">More to Come</div>
                <div className="text-sm text-foreground/60">Innovation Never Stops</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bento-card p-12">
          <h3 className="text-3xl font-bold gradient-text mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI platform to automate workflows, 
            enhance productivity, and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-futuristic group">
              <span>Start Free Trial</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

AIAutomation.displayName = "AIAutomation";

export default AIAutomation;