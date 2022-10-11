import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});
  await prisma.note.deleteMany({});
  await prisma.user.create({
    data: {
      name: "Adam",
      notes: {
        create: [
          {
            message: "A Note for Adam",
          },
          {
            message: "Another note for Adam",
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
      name: "Ryan",
      notes: {
        create: [
          {
            message: "A Note for Ryan",
          },
          {
            message: "Another note for Ryan",
          },
        ],
      },
    },
  });
}

main().then(() => {
  console.log("Data seeded...");
});