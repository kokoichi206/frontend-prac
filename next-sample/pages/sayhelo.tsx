import { useState, useEffect } from "react";

function SayHello() {
  const [name, setName] = useState({ name: "" });

  // 外部の API のリクエストは副作用なので、useEffect で行う。
  // いまいち飲み込めてないかも。
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setName(data));
  }, []);

  return (
    <div>
      <h1>Hello {name.name}</h1>
    </div>
  );
}

export default SayHello;
