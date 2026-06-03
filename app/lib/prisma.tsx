import {PrismaClient} from "./../src/generated/prisma/client";
import {PrismaBetterSqlite3} from "@prisma/adapter-better-sqlite3";
// todo best practices : implémenter un singleton du client prisma (éviter d'ouvrir plusieurs fois la connexion a la bdd)
const adapter = new PrismaBetterSqlite3({url: process.env.DATABASE_URL});
const prisma = new PrismaClient({adapter});

export { prisma }
