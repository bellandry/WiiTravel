# WiiTravel - Simplifiez vos voyages en bus au Cameroun

**WiiTravel** est une application web qui facilite la recherche, la comparaison et la réservation de billets de bus au Cameroun. Notre objectif est de révolutionner le voyage en bus en centralisant toutes les informations des agences locales sur une seule plateforme.

---

## 📊 Description du projet

Ce projet permet aux utilisateurs :

- De **comparer les prix et les trajets** des agences de bus locales.
- De **réserver leurs billets** de manière sécurisée.
- De suivre en **temps réel** leur trajet et l’emplacement du bus.
- D'obtenir des **notifications instantanées** sur l'état de leur voyage.

Ce projet utilise **Next.js**, une technologie moderne pour créer des applications web rapides et SEO-friendly.

---

## 📖 Fonctionnalités principales

1. **Recherche intuitive**
   - Comparez instantanément les prix, les agences et les horaires.
2. **Paiement sécurisé**
   - Options de paiement multiples avec traitement sécurisé.
3. **Réservation anticipée**
   - Possibilité de réserver jusqu'à 30 jours à l'avance.
4. **Suivi en temps réel**
   - Suivez la localisation du bus pendant votre trajet.
5. **Mises à jour instantanées**
   - Notifications en temps réel sur les états du voyage.
6. **Voyage sécurisé**
   - Partenariat uniquement avec des agences vérifiées et licenciées.

---

## 🛠️ Technologies utilisées

Le projet utilise les outils et frameworks modernes suivants :

- **Framework** : [Next.js](https://nextjs.org/)
- **Langage** : TypeScript
- **Animation** : Tailwind CSS, Framer Motion
- **Gestion d'état** : Context API
- **SEO** : Optimisation intégrée grâce à Next.js
- **Hébergement** : Vercel

---

## 💡 Installation et démarrage local

Suivez ces étapes pour lancer le projet en local :

### Prérequis

- **Node.js** (v18+ recommandé)
- **npm** ou **yarn**

### Installation

1. Clonez le projet :

   ```bash
   git clone https://github.com/bellandry/wiitravel.git
   ```

2. Accédez au dossier :

   ```bash
   cd WiiTravel
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```
   ou avec yarn :
   ```bash
   yarn install
   ```

### Lancer le projet

Démarrez le serveur de développement :

```bash
npm run dev
```

Le projet sera accessible sur : [http://localhost:3000](http://localhost:3000)

---

## 📅 Structure du projet

```bash
/src
  |-- app
      |-- layout.tsx      # Layout principal avec SEO
      |-- page.tsx        # Page d'accueil principale
  |-- components
      |-- animations/     # Composants d'animations (ex: scroll, glow)
      |-- ui/             # Composants UI réutilisables
      |-- sections/       # Composants contituants les différentes secion de la page
  |-- lib
      |-- utils.ts        # Fonctions utilitaires
  |-- public
      |-- assets/         # Images et ressources publiques
  |-- styles
      |-- globals.css     # Feuilles de style globales
```

---

## 📝 Optimisations SEO

Pour garantir un bon référencement naturel, nous avons implémenté :

- **Balises méta complètes** pour titre, description, mots-clés, Open Graph et Twitter Card.
- **Structured Data** via **JSON-LD** pour définir le schéma d'une agence de voyage.
- **Canonical URL** pour éviter le duplicate content.
- **Temps de chargement rapide** grâce à l'optimisation des ressources.

---

## 🔧 Améliorations futures

- Ajout d'une carte interactive pour visualiser les trajets.
- Implémentation d'une API pour les avis et notes des utilisateurs.
- Notifications push en temps réel pour les retards.

---

## 👥 Contributeurs

- [Landry Bella](https://laclass.dev)

---

## 📦 Licence

Ce projet est sous licence **MIT**. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.

---

## 📢 Liens utiles

- **Site officiel** : [https://wiitravel.wiidev.fr](https://wiitravel.wiidev.fr)
- **Site Createur** : [https://wiidev.fr](https://wiidev.fr)
- **Documentation Next.js** : [https://nextjs.org/docs](https://nextjs.org/docs)
- **Nous suivre** : [Facebook](https://facebook.com/WiiTravel) | [Instagram](https://instagram.com/WiiTravel)

---

## 💬 Contact

Si vous avez des questions, contactez-nous à l'adresse suivante :

- **Email** : contact@wiitravel.wiidev.fr
- **Téléphone** : +237 651 117 119

---

Merci d'utiliser **WiiTravel** pour vos voyages en toute sérénité ! 🌟
