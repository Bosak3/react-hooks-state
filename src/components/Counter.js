import React, { useState } from "react";

function Counter() {
  //The code below uses array destructuring to shorten the syntax
  const [count, setCount] = useState(0);
  //What the above code normally looks like
  //
  // const countState = useStat(0);
  // const count= counstState[0]
  // const setCount = countState[1];
  //

  function increment() {
    console.log(`before setState: ${count}`);
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    
    
    console.log(`after setState: ${count}`)
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
