import { Headphones } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-jolof-purple text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          CONTACTEZ-NOUS DÈS AUJOURD'HUI !
        </h2>
        <div className="max-w-xl mx-auto bg-white/10 rounded-2xl p-8">
          <Headphones className="w-16 h-16 mx-auto mb-6 text-jolof-light" />
          <div className="space-y-4">
            <p className="text-xl">NORD FOIRE FACE YUM YUM</p>
            <p className="text-xl">M.KEITA1601@GMAIL.COM</p>
            <p className="text-2xl font-bold">77 143 78 79</p>
            <p className="text-xl text-jolof-light">100% FLEXIBLE</p>
          </div>
        </div>
      </div>
    </section>
  );
};