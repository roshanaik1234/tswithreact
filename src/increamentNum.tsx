import React, { useState } from 'react';

function Hello() {
  const [userName, setUserName] = useState("roshan");
  const [currentNum, setCurrentNum] = useState(0);

  const add = (number: number) => {
    setCurrentNum(number + 1);
  };

   const sub = (number: number) => {
    setCurrentNum(number - 1);
  };

  return (
    <>
      <h1>Hello {userName}!</h1>
      <p>Current Number: {currentNum}</p>

      <button onClick={() => add(currentNum)}>Add +1</button>
       <button onClick={() => sub(currentNum)}>Add -1</button>
    </>
  );
}

export default Hello;
