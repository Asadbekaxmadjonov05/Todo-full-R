import React, { useState } from 'react';

function Counter() {
  // useState bilan holatni e'lon qilamiz, boshlang'ich qiymat 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hisoblagich: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1 qo'shish</button>
    </div>
  );
}

export default Counter;