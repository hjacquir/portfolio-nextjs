import  {prisma} from './../lib/prisma'
export async function main() {
    await prisma.site.create({
        data: {
            title: "Titre par défaut",
            description: "Description par défaut",
        },
    });
}

main();
