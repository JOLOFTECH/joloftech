
import { Package, Tag, TrendingUp, CreditCard, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const EcommerceAdvert = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-jolof-purple to-jolof-accent">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image/Visual Side */}
            <div className="bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] p-8 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <img 
                  src="/lovable-uploads/2b1a1d7b-e03f-42e6-9e92-9d1a2dc1023c.png"
                  alt="JoloofTech Logo" 
                  className="h-32 mx-auto mb-6"
                />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  E-COMMERCE MULTI-SECTORIEL
                </h2>
                <p className="text-white/90 text-lg md:text-xl">
                  Transformez votre business avec nos solutions e-commerce complètes
                </p>
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-jolof-purple mb-6">
                Propulsez votre entreprise en ligne
              </h3>
              <p className="text-gray-600 mb-8">
                Nos solutions e-commerce sont adaptées à tous les secteurs: 
                supermarchés, quincailleries, électronique, mode et bien plus encore. 
                Bénéficiez d'une plateforme personnalisée et performante.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Tag className="text-jolof-accent mt-1" />
                  <span>Catalogue produits illimité</span>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="text-jolof-accent mt-1" />
                  <span>Paiements sécurisés</span>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="text-jolof-accent mt-1" />
                  <span>Gestion des livraisons</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-jolof-accent mt-1" />
                  <span>Analyses de ventes</span>
                </div>
              </div>
              
              <Button className="bg-jolof-accent hover:bg-jolof-accent/90 text-white px-8 py-6 h-auto rounded-lg">
                <Package className="mr-2" />
                <span>Demander un devis</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
