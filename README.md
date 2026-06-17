# Portfolio-nextjs
Projet de gestion d'un portfolio en nextJS
## Stacks
* Next.js 16.2.7
## Usages
* copier coller le fichier ``app/.env`` en `app/.env.local` et renseigner les valeurs adaptés à votre contexte
* démarrage du container``docker compose up -d --build``
* connexion au bash : ``docker exec -it portfolio-nextjs bash``
* faire ``npm run dev``
### Prisma
* Seeder ( = rajouter les données de fixtures) la bdd : ``npx prisma db seed``
* Regénérer le client Prisma : ``npx prisma generate``
* Reset la bdd, migration et injection fixtures : ``npx prisma migrate reset --force && npx prisma db push && npx prisma db seed``
## Pratique
* interface sur ``http://localhost:3000/``
* analyse statique des erreurs typescript via le linter : ``npx tsc --noEmit``
## TODO
* optimisations SEO :balise, meta, sitemap, robots etc ... -> done
* encapsulation composant Navigation, remontée dans le parent (layout), rendu dynamique et contextuel -> done
* introduction du singleton pour le client Prisma
* ajouter la validation via zod lors de la création et l'affichage des messages d'erreur
* déplacer le formulaire de création sur une autre page
* ajouter un back-office avec une authentification pour accéder au formulaire de création
* améliorer le rendu visuel du formulaire