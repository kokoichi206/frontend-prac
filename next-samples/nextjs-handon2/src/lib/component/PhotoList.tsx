"use client";

import { FunctionComponent } from "react";
import Image from "next/image";
import { Photo } from "../types";

export const PhotoList: FunctionComponent<{
  photos: Photo[];
}> = ({ photos }) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-[1200px] mx-auto">
      {[0, 1, 2].map((columnIdx) => (
        <div key={columnIdx}>
          {photos.map((photo, photoIdx) => {
            if (photoIdx % 3 !== columnIdx) return null;
            return (
              <div key={photo.id} className="mb-4 last:mb-0">
                <Image
                  className="cursor-pointer"
                  src={photo.urls.small}
                  width={400}
                  height={photo.height / (photo.width / 400)}
                  alt={photo.description}
                  onClick={() => {
                    window.open(photo.links.html, "_blank");
                  }}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
