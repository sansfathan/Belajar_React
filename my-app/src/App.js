import LayoutEffect from './page/useEffect';
import React, { useState } from 'react';
import usePage from './hook/usePage';
import RefTutor from './page/home';
import Parent from './page/optimize';
import useJuz from './hook/usejuz';
import useList from './hook/useList';
function App() {
  const { alquran } = useList();
  console.log('Al-Quran =>', alquran);

  const { page, setPage, pageSize, setPageSize } = usePage();

  const { alquran: data, setJuz, juz } = useJuz(1);
  console.log("juz",juz);
  // console.log("setjuz",setJuz);

  const handlePageSize = (e) => {
    setPageSize(e.target.value);
  };
  const handlePage = (e) => {
    setPage(e.target.value);
  };

  return (
    <React.Fragment>
      <h1 className="bg-red-500 text-center text-white">Belajar Custom Hook</h1>
      <div>
        <h1>page : {page}</h1>
        <h1>page size : {pageSize}</h1>
        <h2 className="font-bold ml-28 mb-3">Juz ke : {juz}</h2>
        <button
        className='ml-3 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
          onClick={() => {
            setJuz((juz) => juz + 1);
          }}
        >Lanjut juz</button>
        <button 
        className='ml-5 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
          onClick={() => {
            setJuz((juz) => juz - 1);
          }}
        >Mundur juz</button>
      </div>

      <div>
        <select value={pageSize} onChange={handlePageSize}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div className="space-x-5">
        <button
          onChange={handlePageSize}
          value={1}
          className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          1
        </button>
        <button
          onChange={handlePageSize}
          value={2}
          className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          2
        </button>
        <button
          onChange={handlePageSize}
          value={3}
          className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          3
        </button>

        <button
          className="border border-1 border-black w-5 p-1 h-8"
          onClick={handlePageSize}
          value={4}
        >
          4
        </button>
        <button
          className="border border-1 border-black w-5 p-1 h-8"
          onClick={handlePageSize}
          value={5}
        >
          5
        </button>
      </div>
      {/* <Parent/> */}
    </React.Fragment>
  );
}
export default App;
