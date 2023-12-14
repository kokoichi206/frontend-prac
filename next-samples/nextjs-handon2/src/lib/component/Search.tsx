"use client";

import { FunctionComponent, useState } from "react";
import { Photo, PhotoSearchResponse } from "../types";
import { VscSearch } from "react-icons/vsc";

export const Search: FunctionComponent = () => {
  const [query, setQuery] = useState<string | null>(null);
  const [searchedPhotos, setSearchedPhotos] = useState<Photo[] | null>(null);

  return (
    <div>
      <div className="my-8 flex justify-center">
        <input
          className="w-96 mr-4 p-2 bg-gray-700"
          value={query ?? ""}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          className="bg-gray-700 py-2 px-4"
          onClick={async () => {
            const response = await fetch(`http://localhost:3000/api/search`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ query }),
            });
            const json: PhotoSearchResponse = await response.json();
            console.log(json);
            setSearchedPhotos(json.results);
          }}
        >
          <VscSearch />
        </button>
      </div>
    </div>
  );
};
