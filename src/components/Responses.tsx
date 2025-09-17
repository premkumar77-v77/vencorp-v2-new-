import { forwardRef, useState, useEffect } from "react";
import { Download, Eye, Search, Filter, Calendar, Users, Mail, Building, Phone, Globe, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ResponsesLogin from "@/components/ResponsesLogin";

interface FormResponse {
  id: string;
  type: 'founders-club' | 'contact' | 'newsletter';
  timestamp: string;
  data: Record<string, any>;
}

const Responses = forwardRef<HTMLElement>((props, ref) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState<FormResponse | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Mock data - in real app, this would come from an API
  const [responses, setResponses] = useState<FormResponse[]>([
    {
      id: '1',
      type: 'founders-club',
      timestamp: '2024-01-15T10:30:00Z',
      data: {
        fullName: 'John Smith',
        email: 'john.smith@startup.com',
        company: 'TechFlow Inc',
        role: 'CEO & Founder',
        startupStage: 'seed',
        industry: 'fintech',
        website: 'https://techflow.com',
        phone: '+1-555-0123',
        description: 'Building the next generation of financial technology solutions for SMEs.'
      }
    },
    {
      id: '2',
      type: 'contact',
      timestamp: '2024-01-14T14:20:00Z',
      data: {
        name: 'Sarah Johnson',
        email: 'sarah@designstudio.com',
        company: 'Creative Design Studio',
        subject: 'partnership',
        message: 'Interested in exploring partnership opportunities for our upcoming product launch.'
      }
    },
    {
      id: '3',
      type: 'founders-club',
      timestamp: '2024-01-13T09:15:00Z',
      data: {
        fullName: 'Michael Chen',
        email: 'michael@aitech.io',
        company: 'AI Technologies',
        role: 'CTO',
        startupStage: 'series-a',
        industry: 'artificial-intelligence',
        website: 'https://aitech.io',
        phone: '+1-555-0456',
        description: 'Developing cutting-edge AI solutions for enterprise automation.'
      }
    }
  ]);

  // Load responses from localStorage on component mount
  useEffect(() => {
    const storedResponses = localStorage.getItem('vencorp_responses');
    if (storedResponses) {
      try {
        const parsed = JSON.parse(storedResponses);
        setResponses(parsed);
      } catch (error) {
        console.error('Error parsing stored responses:', error);
      }
    }
  }, []);

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'responses2024') {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const filteredResponses = responses.filter(response => {
    const matchesSearch = Object.values(response.data).some(value => 
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesFilter = filterType === 'all' || response.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const sortedResponses = [...filteredResponses].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    } else {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    }
  });

  const exportToCSV = () => {
    const headers = ['ID', 'Type', 'Timestamp', 'Data'];
    const csvContent = [
      headers.join(','),
      ...sortedResponses.map(response => [
        response.id,
        response.type,
        response.timestamp,
        JSON.stringify(response.data).replace(/,/g, ';')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vencorp_responses_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getResponseIcon = (type: string) => {
    switch (type) {
      case 'founders-club':
        return <Users className="w-5 h-5 text-primary" />;
      case 'contact':
        return <Mail className="w-5 h-5 text-neon-cyan" />;
      default:
        return <MessageSquare className="w-5 h-5 text-neon-pink" />;
    }
  };

  const getResponseTitle = (type: string) => {
    switch (type) {
      case 'founders-club':
        return 'Founders Club Application';
      case 'contact':
        return 'Contact Form';
      default:
        return 'Form Submission';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  if (!isLoggedIn) {
    return (
      <>
        <section ref={ref} className="py-32 bg-background min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono text-foreground/80">Secure Access Required</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Response Center</span>
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">
              Access and manage all form submissions from your website in one secure location.
            </p>
            <Button 
              className="btn-futuristic"
              onClick={() => setIsLoginOpen(true)}
            >
              Access Responses
            </Button>
          </div>
        </section>

        <ResponsesLogin 
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLogin={handleLogin}
        />
      </>
    );
  }

  return (
    <>
      <section ref={ref} className="py-32 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-sm font-mono text-foreground/80">Response Management</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">All Responses</span>
              </h1>
              <p className="text-lg text-foreground/60">
                Manage and analyze all form submissions from your website
              </p>
            </div>
            <div className="flex gap-4 mt-6 lg:mt-0">
              <Button onClick={exportToCSV} className="btn-ghost-futuristic">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground/60">Total Responses</p>
                    <p className="text-2xl font-bold">{responses.length}</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground/60">Founders Club</p>
                    <p className="text-2xl font-bold">
                      {responses.filter(r => r.type === 'founders-club').length}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-neon-cyan" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground/60">Contact Forms</p>
                    <p className="text-2xl font-bold">
                      {responses.filter(r => r.type === 'contact').length}
                    </p>
                  </div>
                  <Mail className="w-8 h-8 text-neon-pink" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground/60">This Week</p>
                    <p className="text-2xl font-bold">
                      {responses.filter(r => {
                        const weekAgo = new Date();
                        weekAgo.setDate(weekAgo.getDate() - 7);
                        return new Date(r.timestamp) > weekAgo;
                      }).length}
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/60" />
              <Input
                placeholder="Search responses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-foreground/5 border-foreground/20 h-12"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-48 bg-foreground/5 border-foreground/20 h-12">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="founders-club">Founders Club</SelectItem>
                <SelectItem value="contact">Contact Forms</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48 bg-foreground/5 border-foreground/20 h-12">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Responses List */}
          <div className="space-y-4">
            {sortedResponses.map((response) => (
              <Card key={response.id} className="border-border hover:border-primary/30 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      {getResponseIcon(response.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-foreground">
                            {getResponseTitle(response.type)}
                          </h3>
                          <span className="text-xs text-foreground/60 bg-foreground/10 px-2 py-1 rounded">
                            #{response.id}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                          {response.type === 'founders-club' && (
                            <>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-foreground/60" />
                                <span>{response.data.fullName}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-foreground/60" />
                                <span>{response.data.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Building className="w-4 h-4 text-foreground/60" />
                                <span>{response.data.company}</span>
                              </div>
                            </>
                          )}
                          {response.type === 'contact' && (
                            <>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-foreground/60" />
                                <span>{response.data.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-foreground/60" />
                                <span>{response.data.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-foreground/60" />
                                <span>{response.data.subject}</span>
                              </div>
                            </>
                          )}
                        </div>
                        <p className="text-xs text-foreground/60 mt-2">
                          {formatTimestamp(response.timestamp)}
                        </p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedResponse(response)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedResponses.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground/60 mb-2">No responses found</h3>
              <p className="text-foreground/40">
                {searchTerm || filterType !== 'all' ? 'Try adjusting your search or filters' : 'No form submissions yet'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Response Detail Modal */}
      {selectedResponse && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold gradient-text">
                {getResponseTitle(selectedResponse.type)} Details
              </h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedResponse(null)}
                className="hover:bg-foreground/10"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 bg-foreground/5 rounded-lg">
                <div>
                  <span className="text-sm text-foreground/60">Type:</span>
                  <p className="font-medium">{getResponseTitle(selectedResponse.type)}</p>
                </div>
                <div>
                  <span className="text-sm text-foreground/60">Submitted:</span>
                  <p className="font-medium">{formatTimestamp(selectedResponse.timestamp)}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {Object.entries(selectedResponse.data).map(([key, value]) => (
                  <div key={key} className="border-b border-foreground/10 pb-3">
                    <span className="text-sm text-foreground/60 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <p className="font-medium mt-1">{String(value)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

Responses.displayName = "Responses";

export default Responses;