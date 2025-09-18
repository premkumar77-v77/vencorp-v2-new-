import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold gradient-text">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-foreground/70">The page you're looking for doesn't exist or has been moved.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="btn-futuristic group w-full sm:w-auto">
              <Home className="mr-2 w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
          <Link to="/ecosystem">
            <Button variant="outline" className="w-full sm:w-auto">
              Explore Ecosystem
            </Button>
          </Link>
        </div>
        
        <div className="text-sm text-foreground/50">
          Attempted to access: <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
