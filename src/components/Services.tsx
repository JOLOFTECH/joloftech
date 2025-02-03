import { Settings, Globe2, MessageSquare, Shield } from "lucide-react";

const services = [
  {
    title: "RÉPARATION ET MAINTENANCE",
    icon: Settings,
    description: "Dépannage rapide et efficace de vos équipements informatiques. Entretien régulier pour garantir des performances optimales."
  },
  {
    title: "DÉVELOPPEMENT WEB & MOBILE",
    icon: Globe2,
    description: "Conception et développement de votre BOUTIQUE E-COMMERCE, Application mobile, site web, blogue, etc."
  },
  {
    title: "CONSEILS & CONSULTATIONS",
    icon: MessageSquare,
    description: "Assistance personnalisée pour vos projets informatiques. Conseils d'experts pour améliorer votre infrastructure."
  },
  {
    title: "SÉCURITÉ & PROTECTION",
    icon: Shield,
    description: "Mise en place de solutions de sécurité pour protéger vos données. Optimisation des paramètres de sécurité."
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          POURQUOI NOUS CHOISIR ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <service.icon className="w-12 h-12 text-jolof-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};