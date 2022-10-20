import React from "react";

function App() {
  let ClassButton = "text-white hover:text-gray-300 ml-5";
  let [popUp, setPopUp] = React.useState(false);
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-red-500  ">
        <div className="h-[8%] w-full bg-gray-800 lg:hidden flex items-center justify-between px-5">
          <button
            onClick={() => {
              setPopUp(!popUp);
            }}
            className="h-8 w-8 bg-black rounded-full"
          ></button>
          <button className="h-8 w-8 bg-black rounded-full"></button>
          <button className="h-8 w-8 bg-black rounded-full"></button>
        </div>

        <div
          style={{ color: "white", margin: "auto" }}
          className="h-[8%] w-full bg-gray-800 hidden lg:grid grid-cols-5 items-center px-5"
        >
          <section className="flex w-full items-center">
            <span className="h-8 w-8 bg-black rounded-full"></span>
            <input
              className="h-5 ml-3 w-[80] border rounded-md px-2 py-3"
              placeholder="Search"
            />
          </section>
          <section className="col-span-3 h-full flex items-center space-x-5">
            <button className={ClassButton}>Pull Request</button>
            <button className={ClassButton}>Issue</button>
            <button className={ClassButton}>Market Place</button>
            <button className={ClassButton}>Explore</button>
          </section>
          <section className=" h-full w-full flex items-center space-x-2 justify-end ">
            <span className="h-8 w-8 bg-black rounded-full"></span>
            <span className="h-8 w-8 bg-black rounded-full"></span>
            <span className="h-8 w-8 bg-black rounded-full"></span>
          </section>
        </div>

        <div className="h-[90%] w-full bg-gray-900 lg:flex sm:block items-center relative">
          {popUp && (
            <section className="bg-gray-500 w-full top-0 absolute z-10  h-[80%] lg:hidden block"></section>
          )}
          <div className="h-full sm:w-full lg:w-[20%] bg-gray-700"></div>
          <div className="h-full sw-full lg:w-[80%] bg-gray-400"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
