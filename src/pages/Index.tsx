import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectTimeline from "@/components/ProjectTimeline";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <ProjectTimeline />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
