
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { EcommerceAdvert } from "@/components/EcommerceAdvert";
import { AppointmentAdvert } from "@/components/AppointmentAdvert";
import { ErpAdvert } from "@/components/ErpAdvert";
import { MicrosoftProducts } from "@/components/MicrosoftProducts";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <EcommerceAdvert />
      <AppointmentAdvert />
      <ErpAdvert />
      <MicrosoftProducts />
      <Contact />
    </main>
  );
};

export default Index;
