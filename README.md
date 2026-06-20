# Portfolio-nextjs
Projet de gestion d'un portfolio en nextJS
## Stacks
* Next.js 16.2.7
## Usages
* copier coller le fichier ``app/.env`` en `app/.env.local` et renseigner les valeurs adaptés à votre contexte : 
```
ADMIN_EMAIL= mettre ici l'email qui sera utilisé pour la connexion à l'espace admin
ADMIN_PASSWORD_HASH= mettre ici le hash de mot de passe généré à partir de la commande : npx tsx src/scripts/hash-password.ts REMPLACE_PAR_VOTRE_VALEUR
AUTH_SECRET= mettre ici a valeur générée via la commande : npx auth secret
```
* connexion au bash : ``docker exec -it portfolio-nextjs bash``
* faire ``npm run dev``
### Prisma
* Seeder ( = rajouter les données de fixtures) la bdd : ``npx prisma db seed``
* Regénérer le client Prisma : ``npx prisma generate``
* Reset la bdd, migration et injection fixtures : ``npx prisma migrate reset --force && npx prisma db push && npx prisma db seed``
## Pratique
* interface publique sur ``http://localhost:3000/``
* back-office admin sur ``http://localhost:3000/admin``
* analyse statique des erreurs typescript via le linter : ``npx tsc --noEmit``
## Fonctionnement
### Authentification
```
[LoginForm] → formAction(formData) (components/login-form.tsx)
     ↓
[loginAction] → signIn("credentials", { email, password }) (app/login/action.ts)
     ↓
POST /api/auth/callback/credentials   ← géré par le route handler (app/api/auth/[...nextauth]/route.ts)
     ↓
[authorize()] dans auth.ts → vérifie contre ADMIN_EMAIL / ADMIN_PASSWORD_HASH (src/auth.ts)
     ↓
✅ Succès → JWT créé → redirect vers /admin
❌ Échec  → exception catchée → message d'erreur affiché dans le formulaire

Les routes du back office (/admin) sont protégées par le fichier : src/middleware.ts
Le middleware redirige automatiquement vers /login si la session est absente sur toute route sous /admin.
```
## TODO
* optimisations SEO :balise, meta, sitemap, robots etc ... -> done
* encapsulation composant Navigation, remontée dans le parent (layout), rendu dynamique et contextuel -> done
* introduction du singleton pour le client Prisma
* ajouter la validation via zod lors de la création et l'affichage des messages d'erreur
* déplacer le formulaire de création sur une autre page
* ajouter un back-office avec une authentification pour accéder au formulaire de création
* améliorer le rendu visuel du formulaire