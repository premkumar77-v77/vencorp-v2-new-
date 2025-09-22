import { forwardRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = forwardRef<HTMLElement>((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create response object
    const response = {
      id: Date.now().toString(),
      type: 'contact' as const,
      timestamp: new Date().toISOString(),
      data: {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message
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
    
    console.log('Contact form submitted:', formData);
    console.log('Stored response:', response);
    
    alert('Message sent successfully! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "contactus@staciacorp.com",
      description: "Send us an email anytime",
      color: "text-primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91-9363034150",
      description: "Mon-Fri from 8:30am to 6:30pm",
      color: "text-neon-cyan"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Chennai, Tamil Nadu",
      description: "Ground Floor, C-53, Guindy Industrial Estate, Guindy, Chennai - 32",
      color: "text-neon-pink"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 8:30am - 6:30pm",
      description: "Weekend: By appointment",
      color: "text-primary"
    }
  ];

  return (
    <section ref={ref} id="contact" className="py-32 bg-background section-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 mb-4 font-mono">
            Let's Build Something Amazing Together 🚀
          </p>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            Our team is here to help you navigate the future of innovation.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <div key={index} className="bento-card text-center group hover-lift">
              <div className={`mb-4 ${info.color} flex justify-center`}>
                <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-all duration-500">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">{info.title}</h3>
              <p className="text-foreground font-semibold mb-1">{info.details}</p>
              <p className="text-foreground/60 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bento-card">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold gradient-text mb-4">Send Us a Message</h3>
              <p className="text-foreground/70">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    className="bg-foreground/5 border-foreground/20 h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className="bg-foreground/5 border-foreground/20 h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Company/Organization
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your company name"
                    className="bg-foreground/5 border-foreground/20 h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Subject *</label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="bg-foreground/5 border-foreground/20 h-12">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="investment">Investment Opportunity</SelectItem>
                      <SelectItem value="founders-club">Founders Club</SelectItem>
                      <SelectItem value="ecosystem">Ecosystem Partnership</SelectItem>
                      <SelectItem value="ai-automation">AI Automation</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your project, questions, or how we can help you..."
                  className="bg-foreground/5 border-foreground/20 min-h-[150px] resize-none"
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="btn-futuristic w-full md:w-auto px-12 py-4 text-lg group"
                >
                  <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;