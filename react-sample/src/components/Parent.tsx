import React, { memo, useState } from "react";

type FizzProps = {
  isFizz: boolean;
};

const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log(`render Fizz: isFizz = ${isFizz}`);

  return <div>{isFizz ? "Fizz" : ""}</div>;
};

type BuzzProps = {
  isBuzz: boolean;
  onClick: () => void;
};

const Buzz = (props: BuzzProps) => {
  //   const { isBuzz } = props;
  const { isBuzz: foo } = props;
  console.log(`render Buzz: isBuzz = ${foo}`);

  return <div>{foo ? "Fizz" : ""}</div>;
};

export const Parent = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  const onBuzzClick = () => {
    console.log("onBuzzClick");
  };
  console.log(`render Parent: count = ${count}`);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Fizz isFizz={isFizz} />
      <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
    </div>
  );
};
