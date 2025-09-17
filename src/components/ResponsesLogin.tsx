import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ResponsesLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
}

const ResponsesLogin: React.FC<ResponsesLoginProps> = ({ isOpen, onClose, onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Store credentials before clearing
    const { username, password } = credentials;
    
    // Simulate API call delay
    setTimeout(() => {
      onLogin(username, password);
      setIsLoading(false);
      // Only clear credentials after successful login attempt
      setCredentials({ username: '', password: '' });
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold gradient-text">Responses Access</h3>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="hover:bg-foreground/10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
              <User className="w-4 h-4" />
              Username
            </label>
            <Input
              required
              value={credentials.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              placeholder="Enter your username"
              className="bg-foreground/5 border-foreground/20 h-12"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Password
            </label>
            <div className="relative">
              <Input
                required
                type={showPassword ? "text" : "password"}
                value={credentials.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Enter your password"
                className="bg-foreground/5 border-foreground/20 h-12 pr-12"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-foreground/60" />
                ) : (
                  <Eye className="w-4 h-4 text-foreground/60" />
                )}
              </Button>
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="btn-futuristic flex-1"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Access Responses"}
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center text-sm text-foreground/60">
          <p>Demo Credentials:</p>
          <p>Username: <code className="bg-foreground/10 px-1 rounded">admin</code></p>
          <p>Password: <code className="bg-foreground/10 px-1 rounded">responses2024</code></p>
        </div>
      </div>
    </div>
  );
};

export default ResponsesLogin;