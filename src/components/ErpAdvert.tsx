
import { Database } from "lucide-react";
import { motion } from "framer-motion";

export const ErpAdvert = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-jolof-accent to-jolof-purple text-white relative">
      <div className="container mx-auto px-4">
        {/* Add logo in top-right corner */}
        <div className="absolute top-4 right-4">
          <img 
            src="/lovable-uploads/2b1a1d7b-e03f-42e6-9e92-9d1a2dc1023c.png"
            alt="JoloofTech Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <Database className="w-16 h-16 mb-6 text-jolof-light" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">DIGITALISATION DES PROCESSUS (ERP)</h2>
            <p className="text-lg mb-8">
              Transformez la gestion de votre entreprise avec nos solutions ERP sur mesure. 
              Optimisez vos processus, gagnez en efficacité et prenez des décisions plus éclairées 
              grâce à des données fiables et accessibles en temps réel.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                Gestion financière
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                Ressources humaines
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                Chaîne d'approvisionnement
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                CRM intégré
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Pourquoi choisir notre solution ERP?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-jolof-accent rounded-full p-1 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Solution 100% personnalisée selon vos besoins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-jolof-accent rounded-full p-1 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Formation complète de vos équipes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-jolof-accent rounded-full p-1 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Support technique réactif et en français</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-jolof-accent rounded-full p-1 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Mises à jour régulières et évolutivité garantie</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Contact information added */}
      <div className="absolute bottom-4 left-4 text-white text-left">
        <div className="font-semibold mb-1">JOLOOFTECH@GMAIL.COM</div>
        <div className="font-semibold">+221 77 143 78 79</div>
      </div>
    </section>
  );
};
