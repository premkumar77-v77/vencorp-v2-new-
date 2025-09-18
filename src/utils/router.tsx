import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ReactNode } from 'react';

interface RouterWrapperProps {
  children: ReactNode;
}

// Use HashRouter as fallback for environments that don't support BrowserRouter properly
export const RouterWrapper = ({ children }: RouterWrapperProps) => {
  // Try to detect if we're in a static hosting environment
  const isStaticHosting = window.location.protocol === 'file:' || 
                         window.location.hostname === 'localhost' ||
                         process.env.NODE_ENV === 'development';

  // For production deployments, prefer BrowserRouter with proper server configuration
  // For development or static hosting, use HashRouter as fallback
  const Router = !isStaticHosting ? BrowserRouter : HashRouter;

  return <Router>{children}</Router>;
};

export default RouterWrapper;