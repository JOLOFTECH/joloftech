
import { Headphones, Mail, MapPin, Phone, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <footer className="bg-[#221F26] text-white">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-jolof-light">À Propos</h3>
            <p className="text-gray-300">
              JoloofTech est votre partenaire de confiance pour la transformation digitale. 
              Nous créons des solutions innovantes adaptées à vos besoins.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-jolof-light">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="text-jolof-light w-5 h-5" />
                <p>NORD FOIRE FACE YUM YUM</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-jolof-light w-5 h-5" />
                <p>JOLOOFTECH@GMAIL.COM</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-jolof-light w-5 h-5" />
                <p>77 143 78 79</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-jolof-light">Horaires</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="text-jolof-light w-5 h-5" />
                <div>
                  <p>Lun - Ven: 9h - 18h</p>
                  <p>Sam: 9h - 13h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-jolof-light">Newsletter</h3>
            <p className="text-gray-300">Restez informé de nos dernières actualités</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-jolof-light"
              />
              <button className="whitespace-nowrap px-6 py-2 bg-jolof-light rounded-lg hover:bg-opacity-90 transition-all">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2024 JoloofTech. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-jolof-light transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-jolof-light transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-jolof-light transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-jolof-light transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
