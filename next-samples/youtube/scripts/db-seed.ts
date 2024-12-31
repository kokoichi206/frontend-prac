import { PrismaClient, type Prisma } from "@prisma/client";

const main = async () => {
  const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });

  await prisma.$transaction(async (tx) => {
    await videos(tx);
  });
};

const videos = (prisma: Prisma.TransactionClient) => {
  const videos = [
    {
      title: "Video 1",
      description: "This is a video about how to add Android to your project",
      url: "https://github.com/kokoichi206/hatena-blog/blob/main/articles/img/add_android.png",
      duration: 60,
      thumbnail:
        "https://github.com/kokoichi206/hatena-blog/blob/main/articles/img/add_android.png?raw=true",
    },
    {
      title: "Video 2",
      url: "https://github.com/kokoichi206/hatena-blog/blob/main/articles/img/autocomplete.gif?raw=true",
      duration: 120,
      thumbnail:
        "https://github.com/kokoichi206/hatena-blog/blob/main/articles/img/autocomplete.gif?raw=true",
    },
  ];

  return prisma.video.createMany({
    data: videos.map((video) => ({
      title: video.title,
      description: video.description,
      url: video.url,
      thumbnailUrl: video.thumbnail,
      duration: video.duration,
    })),
  });
};

main();
