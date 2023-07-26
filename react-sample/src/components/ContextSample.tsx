import React from "react";

const TitleContext = React.createContext("");

const Title = () => {
  return (
    // Consumer を使って、Context の値を参照する。
    <TitleContext.Consumer>{(title) => <h1>{title}</h1>}</TitleContext.Consumer>
  );
};

const Header = () => {
  return (
    // Header から Title へはデータを渡さない。
    <div>
      <Title />
    </div>
  );
};

const Page = () => {
  const title = "React Context";

  // Provider を使って、Context の値を設定する。
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
