import {prisma} from '@/lib/prisma'

export async function main() {
    await prisma.category.upsert({
        where: {name: "Fruits"},
        update: {},
        create: {
            name: "Fruits",
            offers: {
                create: [
                    {
                        name: "Pomme",
                        price: 1,
                        stocked: true,
                    },
                    {
                        name: "Fruit du dragon",
                        price: 2,
                        stocked: true,
                    },
                    {
                        name: "Fruit de la passion",
                        price: 3,
                        stocked: false,
                    },
                ]
            },
        },
    });

  await prisma.category.upsert({
    where: {name: "Légumes"},
    update: {},
    create: {
      name: "Légumes",
      offers: {
        create: [
          {
            name: "Epinards",
            price: 1,
            stocked: true,
          },
          {
            name: "Citrouille",
            price: 2,
            stocked: false,
          },
          {
            name: "Petits pois",
            price: 3,
            stocked: true,
          },
        ]
      },
    },
  });
}

main();
