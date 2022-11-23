import React from 'react';
import { memo, useCallback } from 'react';
export default function Parent() {
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState('fathan');

//   const handleCount = () => {
//     setCount((c) => c + 1);
//   };
  
//   const handleCountOp = useCallback(handleCount,[])
//   console.log("handleOP =>",handleCountOp);

const handleCount = useCallback(() => {
    setCount((c) => c + 1);
  },[])

  console.log('parent render');
  return (
    <div>
      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="py-3 px-6 border-b border-gray-300">Parent</div>
          <div className="p-6">
            <p className=" text-gray-900 text-xl font-medium mb-4">count : {count}</p>
            <button
              onClick={handleCount}
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Klik
            </button>
          </div>
          <MemorizeChild user={user} handleCount={handleCount} />
        </div>
      </div>

      {/* <Child user={user} /> */}
    </div>
  );
}
const MemorizeChild = memo(Child);

function Child({ user, handleCount }) {
  console.log('child render', Date.now());

  return (
    <div>
      <h2>Child</h2>
      <p>User : {user}</p>
      <button
        onClick={handleCount}
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        tambah count from child
      </button>
    </div>
  );
}

function delay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
