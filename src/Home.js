import React, { useState } from 'react';
import Counter from './Counter';

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0)
        setCount(count - 1); 
    
    else   
      
      alert("Cannont go less than zero")
    
  };

  return (
    <div>
      <h1>Simple Counter App</h1>
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default Home;
