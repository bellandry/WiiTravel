import { menuItems } from "@/constants";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/assets/logo.png"
              width={150}
              height={100}
              priority
              alt="WiiTravel blue logo"
              className="rounded-lg drop-shadow-lg   mb-4 min-w-24 max-w-32 w-auto h-auto"
            />
            <p className="text-gray-400">
              Simplifiez vos voyages en bus au Cameroun avec des technologies
              modernes
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-primary">
                Accueil
              </a>
              {menuItems.map((menuItem) => (
                <li key={menuItem.name}>
                  <a
                    href={menuItem.href}
                    className="text-gray-400 hover:text-primary"
                  >
                    {menuItem.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@wiitravel.wiidev.fr</li>
              <li>Phone: +237 651117119</li>
              <li>Bafoussam, Cameroon</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suivez Nous</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} WiiTravel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
