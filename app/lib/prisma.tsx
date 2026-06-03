import {PrismaClient} from "@/app/generated/prisma/client";
import {PrismaBetterSqlite3} from "@prisma/adapter-better-sqlite3";
import {env} from "prisma/config";

const adapter = new PrismaBetterSqlite3({url: env("DATABASE_URL")});
const prisma = new PrismaClient({adapter});

export { prisma }
