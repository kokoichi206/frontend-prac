import { BBSData } from "@/app/types/types";
import BBSCard from "./BBSCard";

function BBSCardList({ bbsAllData }: { bbsAllData: BBSData[] }) {
  return (
    // 1024px 以上の時に 3 列の配置になる
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  );
}

export default BBSCardList;
