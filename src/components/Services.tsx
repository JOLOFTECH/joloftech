import { Settings, GraduationCap, Trophy, ShoppingCart, Calendar, Database, Warehouse } from "lucide-react";

const services = [
  {
    title: "FORMATION IT",
    icon: GraduationCap,
    description: "Formation professionnelle en informatique et nouvelles technologies. Programmes adaptés aux besoins des entreprises et particuliers."
  },
  {
    title: "HACKATHON GOVATON",
    icon: Trophy,
    description: "Participation active aux hackathons gouvernementaux pour renforcer notre expertise et notre visibilité technique."
  },
  {
    title: "E-COMMERCE MULTI-SECTORIEL",
    icon: ShoppingCart,
    description: "Solutions e-commerce complètes pour tous secteurs : supermarchés, quincailleries, électronique, mode et plus encore."
  },
  {
    title: "SYSTÈME DE PRISE DE RENDEZ-VOUS",
    icon: Calendar,
    description: "Plateforme intuitive de gestion des rendez-vous pour optimiser votre organisation et satisfaire vos clients."
  },
  {
    title: "DIGITALISATION DES PROCESSUS (ERP)",
    icon: Database,
    description: "Transformation digitale de vos processus métier avec des solutions ERP sur mesure pour une meilleure efficacité."
  },
  {
    title: "E-SUPERMARCHÉ SPÉCIALISÉ",
    icon: Warehouse,
    description: "Plateforme e-commerce spécialisée en quincaillerie et équipements de parking, avec une large gamme de produits."
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          POURQUOI NOUS CHOISIR ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <service.icon className="w-12 h-12 text-jolof-accent mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};