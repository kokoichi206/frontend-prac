import Image from "next/image";

type Photo = {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
  };
};

const getRandomPhotos = async (): Promise<Photo[]> => {
  const params = new URLSearchParams();

  params.append("client_id", process.env.UNSPLASH_API_ACCESS_KEY ?? "");
  params.append("count", "32");

  console.log(params.toString() )
  const response = await fetch(
    `https://api.unsplash.com/photos/random?${params.toString()}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  if (response.status !== 200) {
    console.error(response);
  }

  return response.json();
};

const Home = async () => {
  const randomPhotos: Photo[] = await getRandomPhotos();

  return (
    <div className="grid grid-cols-3 gap-4 w-[1200px] mx-auto">
      {[0, 1, 2].map((columnIdx) => (
        <div key={columnIdx}>
          {randomPhotos.map((photo, photoIdx) => {
            if (photoIdx % 3 === columnIdx) {
              return (
                <div key={photo.id} className="mb-4 last:mb-0">
                  <Image
                    key={photo.id}
                    src={photo.urls.small}
                    width={400}
                    height={photo.height / (photo.width / 400)}
                    alt={photo.description}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default Home;
