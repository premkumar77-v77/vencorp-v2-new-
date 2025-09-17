import Header from "@/components/Header";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EcosystemPage = () => {
  const ref = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <Ecosystem ref={ref} />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default EcosystemPage;