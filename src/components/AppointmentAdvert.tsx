
import { Calendar, Clock, Phone, Mail, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const AppointmentAdvert = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-jolof-accent to-jolof-light">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image/Visual Side */}
            <div className="bg-gradient-to-br from-[#33C3F0] to-[#6E59A5] p-8 flex items-center justify-center relative">
              {/* Logo in top-left corner */}
              <img 
                src="/lovable-uploads/2b1a1d7b-e03f-42e6-9e92-9d1a2dc1023c.png"
                alt="JoloofTech Logo" 
                className="h-16 w-auto absolute top-4 left-4"
              />
              
              {/* Contact information added */}
              <div className="absolute bottom-4 left-4 text-white text-left">
                <div className="font-semibold mb-1">JOLOOFTECH@GMAIL.COM</div>
                <div className="font-semibold">+221 77 143 78 79</div>
              </div>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Calendar className="w-24 h-24 text-white mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  SYSTÈME DE PRISE DE RENDEZ-VOUS
                </h2>
                <p className="text-white/90 text-lg md:text-xl">
                  Optimisez votre gestion du temps avec notre plateforme intuitive
                </p>
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-jolof-purple mb-6">
                Simplifiez vos rendez-vous professionnels
              </h3>
              <p className="text-gray-600 mb-8">
                Notre système de prise de rendez-vous s'adapte à tous les secteurs: 
                médical, conseil, beauté, éducation et services professionnels. 
                Automatisez et optimisez votre planning en quelques clics.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="text-jolof-accent mt-1" />
                  <span>Planification automatisée</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-jolof-accent mt-1" />
                  <span>Notifications par email</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-jolof-accent mt-1" />
                  <span>Rappels SMS</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-jolof-accent mt-1" />
                  <span>Interface personnalisable</span>
                </div>
              </div>
              
              <Button className="bg-jolof-accent hover:bg-jolof-accent/90 text-white px-8 py-6 h-auto rounded-lg">
                <Calendar className="mr-2" />
                <span>Demander une démo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
