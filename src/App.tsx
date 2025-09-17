import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FoundersClubPage from "./pages/FoundersClub";
import EcosystemPage from "./pages/Ecosystem";
import AIAutomationPage from "./pages/AIAutomation";
import ContactPage from "./pages/Contact";
import ResponsesPage from "./pages/Responses";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/founders-club" element={<FoundersClubPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/ai-automation" element={<AIAutomationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/responses" element={<ResponsesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
