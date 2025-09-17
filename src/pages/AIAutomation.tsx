import Header from "@/components/Header";
import AIAutomation from "@/components/AIAutomation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AIAutomationPage = () => {
  const ref = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <AIAutomation ref={ref} />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AIAutomationPage;