import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});
  await prisma.note.deleteMany({});
  await prisma.user.create({
    data: {
<<<<<<< HEAD
      name: "Billy",
      notes: {
        create: [
          {
            message: "A Note for Billy",
          },
          {
            message: "Another note for Billy",
=======
      name: "Adam",
      notes: {
        create: [
          {
            message: "A Note for Adam",
          },
          {
            message: "Another note for Adam",
>>>>>>> updates
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
<<<<<<< HEAD
      name: "Joe",
      notes: {
        create: [
          {
            message: "A Note for Joe",
          },
          {
            message: "Another note for Joe",
=======
      name: "Ryan",
      notes: {
        create: [
          {
            message: "A Note for Ryan",
          },
          {
            message: "Another note for Ryan",
>>>>>>> updates
          },
        ],
      },
    },
  });
}

main().then(() => {
  console.log("Data seeded...");
<<<<<<< HEAD
});
=======
});
>>>>>>> updates
