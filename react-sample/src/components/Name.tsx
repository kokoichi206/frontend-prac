import React from "react";

const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div style={{ padding: "16px", background: "grey" }}>
      <label htmlFor="name">Name</label>
    </div>
  );
};

export default Name;
