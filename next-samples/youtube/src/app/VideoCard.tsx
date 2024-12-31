import Image from "next/image";
import { type FC } from "react";

export const VideoCard: FC<{
  video: {
    thumbnail: string;
    title: string;
  };
}> = ({ video }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <Image
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-auto"
        width={320}
        height={180}
      />
      <div className="p-4">
        <h3 className="text-sm font-medium">{video.title}</h3>
      </div>
    </div>
  );
};
