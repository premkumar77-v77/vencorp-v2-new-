import Header from "@/components/Header";
import FoundersClub from "@/components/FoundersClub";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FoundersClubPage = () => {
  const ref = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <FoundersClub ref={ref} />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default FoundersClubPage;