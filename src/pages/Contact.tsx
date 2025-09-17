import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactPage = () => {
  const ref = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <Contact ref={ref} />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;