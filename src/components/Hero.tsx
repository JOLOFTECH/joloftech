
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { processLogoImage } from "../utils/imageUtils";

export const Hero = () => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>("/lovable-uploads/2b1a1d7b-e03f-42e6-9e92-9d1a2dc1023c.png");

  useEffect(() => {
    const processLogo = async () => {
      const newUrl = await processLogoImage("/lovable-uploads/2b1a1d7b-e03f-42e6-9e92-9d1a2dc1023c.png");
      setProcessedLogoUrl(newUrl);
    };

    processLogo();
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-jolof-purple to-jolof-accent text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <img 
            src={processedLogoUrl}
            alt="JoloofTech Logo" 
            className="h-32 mx-auto mb-8"
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
