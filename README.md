# Portfolio-nextjs
Projet de gestion d'un portfolio en nextJS
## Stacks
* Next.js 16.2.7
## Commandes
* démarrage du container``docker compose up -d --build``
* connexion au bash : ``docker exec -it portfolio-nextjs bash``
* faire ``npm run dev``
### Prisma
* Seeder ( = rajouter les données de fixtures) la bdd : ``npx prisma db seed``
* Reset la bdd : ``npx prisma migrate reset --force && npx prisma db push && npx prisma db seed``
## Usages
* interface sur ``http://localhost:3000/``
