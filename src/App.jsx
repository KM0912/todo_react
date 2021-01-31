import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/colorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [peaceShowFlag, setPeaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setPeaceShowFlag(!peaceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        peaceShowFlag || setPeaceShowFlag(true);
      } else {
        peaceShowFlag && setPeaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {peaceShowFlag && <p>✌️</p>}
    </>
  );
};

export default App;
