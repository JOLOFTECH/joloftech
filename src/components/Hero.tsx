
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-jolof-purple to-jolof-accent text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* On utilise le logo blanc puisque le fond est sombre */}
          <img 
            src="/white-logo.png" 
            alt="JoloofTech Logo" 
            className="h-24 mx-auto mb-8"
          />
          <p className="text-xl md:text-2xl mb-8 text-jolof-light">
            SERVICES INFORMATIQUE
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            N'hésitez pas à nous contacter pour obtenir un devis gratuit ou pour discuter de vos besoins informatiques.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
