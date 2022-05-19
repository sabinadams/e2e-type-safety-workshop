import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});
  await prisma.note.deleteMany({});
  await prisma.user.create({
    data: {
      name: "Billy",
      notes: {
        create: [
          {
            message: "A Note for Billy",
          },
          {
            message: "Another note for Billy",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Jack",
      notes: {
        create: [
          {
            message: "A Note for Jack",
          },
          {
            message: "Another note for Jack",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Joe",
      notes: {
        create: [
          {
            message: "A Note for Joe",
          },
          {
            message: "Another note for Joe",
          },
        ],
      },
    },
  });
}

main().then(() => {
  console.log("Data seeded...");
});
