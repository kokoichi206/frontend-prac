"use client";

import { FC } from "react";
import { VideoCard } from "./VideoCard";

export const VideoGrid: FC<{
  videos: {
    id: number;
    thumbnail: string;
    title: string;
  }[];
}> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};
