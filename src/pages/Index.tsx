
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { EcommerceAdvert } from "@/components/EcommerceAdvert";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <EcommerceAdvert />
      <Contact />
    </main>
  );
};

export default Index;
