import BBSCardList from "@/components/BBSCardList";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    // https://nextjs.org/docs/app/building-your-application/data-fetching
    // cache: "force-cache", // force-cache for ssg, no-store for ssr,
    // next: { revalidate: 3600 }, // for isr
    cache: "no-store",
  });

  const bbsAllData: BBSData[] = await response.json();
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
