import {
  Bell,
  Calendar,
  Clock,
  CreditCard,
  MapPin,
  Search,
  Shield,
  ThumbsUp,
  Users,
} from "lucide-react";

export const partners = [
  { name: "Bluebird Express", logo: "/assets/agences/bluebird-express.jpeg" },
  { name: "Buca Voyages", logo: "/assets/agences/buca-voyage.jpeg" },
  {
    name: "Touristique Express",
    logo: "/assets/agences/touristique-express.jpeg",
  },
  { name: "Finex Voyages", logo: "/assets/agences/finex-voyages.jpeg" },
  { name: "General Express", logo: "/assets/agences/general-express.jpeg" },
  { name: "Garanti Express", logo: "/assets/agences/garanti-express.png" },
];

export const menuItems = [
  { name: "Services", href: "#features" },
  { name: "Partenaires", href: "#partners" },
  { name: "Comment ça marche ?", href: "#howitworks" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "Télécharger", href: "#download" },
];

export const steps = [
  {
    step: 1,
    title: "Téléchargez l'application et inscrivez-vous",
    description:
      "Commencez votre expérience en téléchargeant l'application. Créez votre compte en quelques minutes seulement pour accéder à tous nos services.",
    image: "/assets/steps/step1.webp",
  },
  {
    step: 2,
    title: "Recherchez et comparez",
    description:
      "Explorez plusieurs agences de bus, itinéraires et tarifs. Trouvez facilement le trajet qui correspond le mieux à vos besoins et votre budget.",
    image: "/assets/steps/step2.webp",
  },
  {
    step: 3,
    title: "Réservez et payez en toute sécurité",
    description:
      "Choisissez le voyage qui vous convient et finalisez votre réservation grâce à notre système de paiement rapide et sécurisé.",
    image: "/assets/steps/step3.webp",
  },
  {
    step: 4,
    title: "Suivez et voyagez en toute sérénité",
    description:
      "Recevez des mises à jour en temps réel sur votre voyage, suivez votre itinéraire et profitez d'une expérience de voyage sans stress.",
    image: "/assets/steps/step4.webp",
  },
];

export const baseTestimonials = [
  {
    name: "Jean Paul",
    location: "Douala",
    text: "Grâce à CameroonBus, voyager est devenu un vrai jeu d'enfant. Plus besoin de courir d'une agence à l'autre pour comparer les prix, tout se fait en quelques clics !",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "Marie Claire",
    location: "Yaoundé",
    text: "La fonctionnalité de suivi en temps réel me rassure énormément quand mes proches voyagent. Je peux suivre leur itinéraire à tout moment, c'est génial !",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    name: "Robert",
    location: "Bamenda",
    text: "Réserver mes billets à l'avance n'a jamais été aussi simple. L'application est vraiment pratique et rapide, je la recommande !",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
  {
    name: "Marie Claire",
    location: "Yaoundé",
    text: "La fonctionnalité de suivi en temps réel me rassure énormément quand mes proches voyagent. Je peux suivre leur itinéraire à tout moment, c'est génial !",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    name: "Robert",
    location: "Bamenda",
    text: "Réserver mes billets à l'avance n'a jamais été aussi simple. L'application est vraiment pratique et rapide, je la recommande !",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
  {
    name: "Jean Paul",
    location: "Douala",
    text: "Grâce à CameroonBus, voyager est devenu un vrai jeu d'enfant. Plus besoin de courir d'une agence à l'autre pour comparer les prix, tout se fait en quelques clics !",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
];

export const features = [
  {
    icon: Search,
    title: "Recherche Facile",
    description:
      "Comparez instantanément les prix et horaires de plusieurs agences pour trouver l'option idéale.",
  },
  {
    icon: CreditCard,
    title: "Paiement Sécurisé",
    description:
      "Profitez de multiples options de paiement avec des transactions rapides et entièrement sécurisées.",
  },
  {
    icon: Calendar,
    title: "Réservation Anticipée",
    description:
      "Planifiez vos voyages sereinement en réservant vos billets jusqu'à 30 jours à l'avance.",
  },
  {
    icon: Clock,
    title: "Mises à Jour en Temps Réel",
    description:
      "Recevez des notifications instantanées sur l'état de votre trajet, comme les départs ou retards.",
  },
  {
    icon: MapPin,
    title: "Suivi de l'Itinéraire",
    description:
      "Restez informé de la position de votre bus en temps réel tout au long de votre voyage.",
  },
  {
    icon: Shield,
    title: "Voyage en Toute Sécurité",
    description:
      "Voyagez l'esprit tranquille grâce à nos partenariats avec des agences de transport vérifiées et agréées.",
  },
  {
    icon: ThumbsUp,
    title: "Service Client Fiable",
    description:
      "Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos questions et résoudre vos problèmes.",
  },
  {
    icon: Users,
    title: "Expériences Partagées",
    description:
      "Consultez les avis et évaluations d'autres voyageurs pour faire un choix éclairé.",
  },
  {
    icon: Bell,
    title: "Rappels Pratiques",
    description:
      "Ne manquez aucun départ grâce à nos rappels personnalisés pour vos voyages et correspondances.",
  },
];
