import { prisma } from "@/lib/db";
import { VideoGrid } from "./VideoGrid";
import { ClientWrapper } from "./ClientWrapper";

export default async function Home() {
  const videos = await prisma.video.findMany();
  console.dir(videos);

  return (
    <div>
      <ClientWrapper>
        <VideoGrid
          videos={videos.map((v) => {
            return {
              id: v.id,
              thumbnail: v.thumbnailUrl,
              title: v.title,
            };
          })}
        />
      </ClientWrapper>
    </div>
  );
}
