import React, { useMemo } from 'react';
import { memo, useCallback } from 'react';
export default function Parent() {
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState('red');

  //   const handleCount = () => {
  //     setCount((c) => c + 1);
  //   };

  //   const handleCountOp = useCallback(handleCount,[])
  //   console.log("handleOP =>",handleCountOp);

  const handleCount = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const handleCountK = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  const prossesBerat = (count) => {
    if (count < 200000) {
    }
    console.log('berjalan');
    return count + 1;
  };

  const prossesBeratMemo = useMemo(() => {
    return prossesBerat(count);
  }, [count]);

  console.log('parent render');
  return (
    <div>
      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="py-3 px-6 border-b border-gray-300">Parent</div>
          <div className="p-6">
            <p className=" text-gray-900 text-xl font-medium mb-4">
              Count : {count}
            </p>
            <p>Count 2 : {prossesBeratMemo}</p>

            <button
              onClick={handleCount}
              type="button"
              className="mt-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Tambah
            </button>
            <button
              onClick={handleCountK}
              type="button"
              className="ml-10 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Kurang
            </button>
          </div>
          <MemorizeChild user={user} handleCount={handleCount} />
        </div>
      </div>
      <div className="mt-10">
        <button
          onClick={() => {
            setUser('Green');
          }}
          type="button"
          className="ml-10 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Green
        </button>
        <button
          onClick={() => {
            setUser('red');
          }}
          type="button"
          className="ml-10 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Red
        </button>
        <button
          className="ml-5 bg-blue-500 w-20 h-8 rounded text-white"
          onClick={() => {
            setUser('blue');
          }}
        >
          Blue
        </button>
        
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
      <div  className="bg-white text-black w-11 mb-5 h-8 ml-10 mt-10">{user}</div>
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
}
