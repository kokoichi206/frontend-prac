import BBSCard from "./BBSCard";

function BBSCardList() {
  return (
    // 1024px 以上の時に 3 列の配置になる
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
    </div>
  );
}

export default BBSCardList;
