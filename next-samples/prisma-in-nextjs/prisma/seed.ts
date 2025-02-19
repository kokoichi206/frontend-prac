import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const posts: Prisma.PostCreateInput[] = [
  // const posts: Prisma.PostUpdateInput[] = [
  {
    title: "first post",
    slug: "first-post",
    content: "This is the first post",
    author: {
      connectOrCreate: {
        where: {
          email: "john@gmail.com",
        },
        create: {
          email: "john@gmail.com",
          hashedPassword: "fjaeoijfawifaop;k",
        },
      },
    },
  },
];

async function main() {
  console.log("Start seeding ...");
  for (const post of posts) {
    const newPost = await prisma.post.create({
      data: post,
    });
    console.log(`Created post with id: ${newPost.id}`);
  }
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
