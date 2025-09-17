import Header from "@/components/Header";
import Responses from "@/components/Responses";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ResponsesPage = () => {
  const ref = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <Responses ref={ref} />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ResponsesPage;