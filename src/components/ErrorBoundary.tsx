import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background">
          <div className="text-center space-y-6 max-w-md mx-auto px-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold gradient-text">Oops!</h1>
              <h2 className="text-xl font-semibold text-foreground">Something went wrong</h2>
              <p className="text-foreground/70">
                We're sorry, but something went wrong. Please try refreshing the page or go back to the home page.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={this.handleReload} className="btn-futuristic group w-full sm:w-auto">
                <RefreshCw className="mr-2 w-4 h-4" />
                <span>Refresh Page</span>
              </Button>
              <Button onClick={this.handleGoHome} variant="outline" className="w-full sm:w-auto">
                <Home className="mr-2 w-4 h-4" />
                Go to Home
              </Button>
            </div>
            
            {this.state.error && (
              <details className="text-left">
                <summary className="text-sm text-foreground/50 cursor-pointer hover:text-foreground/70">
                  Error Details
                </summary>
                <pre className="text-xs bg-muted p-3 rounded mt-2 overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;