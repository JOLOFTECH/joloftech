
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const MicrosoftProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jolof-purple mb-4">
            LICENCES MICROSOFT OFFICIELLES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Obtenez des licences Microsoft authentiques avec livraison instantanée pour tous vos besoins professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Windows 10 Pro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="text-white mb-4">
                <p className="text-sm font-semibold">Microsoft</p>
                <h3 className="text-2xl font-bold mt-1">Windows 10 Pro</h3>
              </div>
              
              <div className="flex justify-center my-6 flex-grow">
                <img 
                  src="/lovable-uploads/8e48489e-48a4-4453-b9ed-1d18b85322c9.png" 
                  alt="Windows 10 Pro" 
                  className="h-44 object-contain"
                />
              </div>
              
              <div className="bg-white/20 text-white text-center py-1.5 px-3 rounded-full text-sm font-semibold w-fit mx-auto mb-4">
                INSTANT DELIVERY
              </div>
              
              <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 mt-auto">
                <Download className="mr-2 h-4 w-4" />
                Commander maintenant
              </Button>
            </div>
          </motion.div>
          
          {/* Office 2021 Pro Plus */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-start mb-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" 
                  alt="Microsoft Logo" 
                  className="h-6" 
                />
              </div>
              
              <div className="bg-gray-100 text-gray-700 text-center py-1.5 px-3 rounded-full text-sm font-semibold w-fit mb-4">
                INSTANT DELIVERY
              </div>
              
              <div className="flex justify-center my-4 flex-grow">
                <img 
                  src="/lovable-uploads/19551594-9080-4c57-acf8-a6c187c53975.png" 
                  alt="Office 2021 Professional Plus" 
                  className="h-40 object-contain"
                />
              </div>
              
              <h3 className="text-xl font-bold text-center mt-2">OFFICE 2021</h3>
              <p className="text-sm text-center text-gray-500 mb-4">PROFESSIONAL PLUS</p>
              
              <div className="flex justify-center gap-1 my-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Microsoft_PowerPoint_2019_present.svg" alt="PowerPoint" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg" alt="Word" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="Excel" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1024px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png" alt="Outlook" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Microsoft_Office_OneNote_%282019%E2%80%93present%29.svg" alt="OneNote" className="h-6" />
              </div>
              
              <Button className="w-full bg-jolof-accent hover:bg-jolof-accent/90 text-white mt-auto">
                <Download className="mr-2 h-4 w-4" />
                Commander maintenant
              </Button>
            </div>
          </motion.div>
          
          {/* Office 2021 for Mac */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-start mb-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" 
                  alt="Microsoft Logo" 
                  className="h-6" 
                />
              </div>
              
              <div className="bg-gray-100 text-gray-700 text-center py-1.5 px-3 rounded-full text-sm font-semibold w-fit mb-4">
                INSTANT DELIVERY
              </div>
              
              <div className="flex justify-center my-4 flex-grow">
                <img 
                  src="/lovable-uploads/01ea31cc-5a52-4018-a320-c93c9e1122de.png" 
                  alt="Office 2021 for Mac" 
                  className="h-40 object-contain"
                />
              </div>
              
              <div className="flex items-center justify-center gap-2 my-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/505px-Apple_logo_grey.svg.png" alt="Apple Logo" className="h-4" />
                <p className="text-sm font-medium">For MAC</p>
              </div>
              
              <h3 className="text-xl font-bold text-center mt-1">OFFICE 2021</h3>
              <p className="text-sm text-center text-gray-500 mb-4">PROFESSIONAL PLUS</p>
              
              <div className="flex justify-center gap-1 my-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Microsoft_PowerPoint_2019_present.svg" alt="PowerPoint" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg" alt="Word" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="Excel" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1024px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png" alt="Outlook" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Microsoft_Office_OneNote_%282019%E2%80%93present%29.svg" alt="OneNote" className="h-6" />
              </div>
              
              <Button className="w-full bg-jolof-accent hover:bg-jolof-accent/90 text-white mt-auto">
                <Download className="mr-2 h-4 w-4" />
                Commander maintenant
              </Button>
            </div>
          </motion.div>
          
          {/* Windows 11 Pro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-start">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" 
                  alt="Microsoft Logo" 
                  className="h-6" 
                />
                <div className="bg-black/40 text-white text-center py-1.5 px-3 rounded-full text-sm font-semibold">
                  INSTANT DELIVERY
                </div>
              </div>
              
              <div className="flex justify-center my-8 flex-grow">
                <img 
                  src="/lovable-uploads/d516828f-1d1c-4e5d-8dbd-780d16a5c879.png" 
                  alt="Windows 11 Pro" 
                  className="h-40 object-contain"
                />
              </div>
              
              <h3 className="text-3xl font-bold text-white mt-2 mb-1">Windows 11</h3>
              <p className="text-xl text-white/80 mb-6">Professional</p>
              
              <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 mt-auto">
                <Download className="mr-2 h-4 w-4" />
                Commander maintenant
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Contact information */}
        <div className="mt-12 text-center text-gray-600">
          <p className="font-semibold">Pour toute commande ou information:</p>
          <div className="font-semibold mt-2">JOLOOFTECH@GMAIL.COM | +221 77 143 78 79</div>
        </div>
      </div>
    </section>
  );
};
