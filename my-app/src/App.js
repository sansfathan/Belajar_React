import React from "react";

function App() {
  let ClassButton = "text-white hover:text-gray-300 ml-3 cursor-pointer";
  let [popUp, setPopUp] = React.useState(false);
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[#4b5ae2]">
        <div className=" bg-[#161b22] h-[8%] w-full lg:hidden flex items-center justify-between px-5 z-50 relative">
          <button
            onClick={() => {
              setPopUp(!popUp);
            }}
            className="h-8 w-8 bg-black rounded-full"
          ></button>
          <button className="h-8 w-8 bg-black rounded-full"></button>
          <button className="h-8 w-8 bg-black rounded-full"></button>
        </div>

        <div className=" bg-[#161b22] h-[8%] w-full hidden lg:grid grid-cols-5 items-center px-5">
          <section className="flex items-center">
            <span className="h-8 w-9 bg-gray-700 rounded-full"></span>
            <input
              className="h-5 w-full border rounded-md px-2 py-3 ml-3 "
              placeholder="Search or Jump to ..."
            />
          </section>
          <section className="col-span-3 h-full flex items-center ml-10 space-x-5">
            <button className={ClassButton}>Pull Request</button>
            <button className={ClassButton}>Issue</button>
            <button className={ClassButton}>Marketplace</button>
            <button className={ClassButton}>Explore</button>
          </section>
          <section className="flex items-center h-full w-full space-x-2 justify-end">
            <span className="h-8 w-8 bg-slate-700 rounded-full"></span>
            <span className="h-8 w-8 bg-slate-700 rounded-full"></span>
            <span className="h-8 w-8 bg-slate-700 rounded-full"></span>
          </section>
        </div>

        <div className="h-[90%] w-full bg-gray-900 lg:flex sm:block items-center relative">
          {/* {popUp && (
            <section className="bg-gray-500 w-full top-0 absolute z-10  h-[90%] lg:hidden block"></section>
          )} */}

          <section
            className={`${
              popUp
                ? "transform translate-y-0 transition duration-1000 skew-y-10 "
                : "transform -translate-y-full transition duration-500 skew-y-5"
            } bg-white w-full top-0 absolute z-10  h-[90%] lg:hidden block flex items-center`}
          >
            <h5 className="font-bold font-black text-lg rotate-90 whitespace-nowrap tracking-widest">
              SMK MADINATUL QUR'AN
            </h5>
          </section>

          <div className="h-[100%] sm:w-full lg:w-[20%] bg-gray-700 p-5 ">
            <section className="flex item-center space-x-2 pb-4 border-b-2">
              <div className="w-8 h-8 rounded-full  bg-white "></div>
              <button className="text-white">Muhammad Fathan </button>
            </section>
            <section>
              <div className="flex items-center justify-between text-white mt-5">
                <p>Recent Repositories</p>
                <button className="border-gring-gray-600 px-3 py-1 bg-green-400 rounded-md cursor-pointer">
                  New
                </button>
              </div>
              <div className="mt-3">
                <input
                  className="h-5 w-full border rounded-md px-2 py-3 bg-gray-600 text-white"
                  placeholder="Find a repository"
                />
              </div>
              <div>
                {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => {
                  return (
                    <div key={item}>
                      <div className="flex items-center space-x-2 mt-2 text-white">
                        <div className="h-3 w-3 bg-white rounded-full"></div>
                        <p>fathan/Repository</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="flex item-center space-x-2 pb-4 border-b-2"></section>
            <section>
              <p className="font-bold text-white mt-2">Recent activity</p>
              <p className="text-white mt-2">When you take actions across GitHub, we’ll provide links to that activity here.</p>
            </section>
          </div>
          <div className="h-full sw-full lg:w-[80%] bg-gray-400">
            <header>
              {/* Jumbotron */}
              <div className=" bg-gray-400 text-gray-800 py-15 px-6">
                <h1 className="text-5xl font-bold mt-5 mb-6 ">
                  The home for all developers — including you.
                </h1>
                <p className=" font-bold mb-8">
                  Welcome to your personal dashboard, where you can find an
                  introduction to how GitHub works, tools to help you build
                  software, and help merging your first lines of code.
                </p>
                <div className="flex item-center space-x-2 pb-4 ">
                  <div className="w-8 h-8 rounded-full  bg-white "></div>
                  <p className="text-white"> Starting With Code</p>
                </div>
                <div className=" flex items-center ">
                  <div className="w-[40%] h-[40%] bg-gray-600 border-white border-2 mr-3 mb-5 py-5 px-6 rounded-md">
                    <p className="text-white font-bold">
                      Start a new repository
                    </p>
                    <p className="text-white mt-2">
                      A repository contains all of your project's files,
                      revision history, and collaborator discussion.
                    </p>
                    <div className="text-white mt-2">
                      SansFathan/
                      <input
                        className="h-5 w-56 px-2 py-3 ml-2 border bg-gray-600 rounded-md"
                        placeholder="name your new repository..."
                      />
                    </div>
                    <div className="flex items-center mt-3">
                      <input type="radio" classname="mt-3" />
                      <div className="w-5 h-5 bg-gray-600 ml-3 mr-2  rounded-md border-white border-2"></div>
                      <p className="font-bold text-white">Public</p>
                    </div>
                    <p className="text-white text-center">
                      Anyone on the internet can see this repository
                    </p>
                    <div className="flex items-center mt-3">
                      <input type="radio" classname="mt-3" />
                      <div className="w-5 h-5 bg-gray-600 ml-3 mr-2  rounded-md border-white border-2"></div>
                      <p className="font-bold text-white">Private</p>
                    </div>
                    <p className="text-white  text-justify">
                      You choose who can see and commit to this repository
                    </p>
                    <button className="bg-green-500 rounded-md text-white mt-5 py-1 px-2">
                      Create a new ripository
                    </button>
                  </div>
                  <div className="w-[40%] h-[40%] bg-gray-600 border-white border-2  mb-5 py-5 px-6 ml-2 rounded-md items-center">
                    <p className="text-white font-bold">
                      Introduce yourself with a profile README
                    </p>
                    <p className="text-white mt-2">
                      A repository contains all of your project's files,
                      revision history, and collaborator discussion.
                    </p>
                    <div className="w-50 h-50 bg-gray-700 mt-3 border-gray-800 border-2 items-center flex justify-between text-white rounded-md py-2">
                      <p className="ml-4">sansfathan/README.md</p>
                      <button className="border-gring-gray-600 px-3 py-1 bg-green-400 rounded-md cursor-pointer mr-4">
                        Create
                      </button>
                    </div>
                    <div>
                      <div className="w-50 h-50 bg-gray-700 mt-3 border-gray-800 border-2   justify-between text-white rounded-md py-2">
                        <p className="ml-4">1 - Hi, I’m @sansfathan</p>
                        <p className="ml-4">2 - I’m interested in ...</p>
                        <p className="ml-4">3 - I’m currently learning ...</p>
                        <p className="ml-4">
                          4 - I’m looking to collaborate on
                        </p>
                        <p className="ml-4">5 - How to reach me ...</p>
                        <p className="ml-4">6</p>
                      </div>
                    </div>
                  </div>
                  
                
                </div>
                <div className="flex item-center space-x-2 pb-4 ">
                  <div className="w-8 h-8 rounded-full  bg-white "></div>
                  <p className="text-white"> Use tools of the trade</p>
                </div>
                <div className=" flex items-center ">
                  <div className="w-[40%] h-[40%] bg-gray-600 border-white border-2 mr-3 mb-5 py-5 px-6 rounded-md">
                    <p className="text-white font-bold">
                      Start a new repository
                    </p>
                    <div className="flex item-center space-x-2 pb-4 ">
                  <div className="w-8 h-8 rounded-full  bg-white "></div>
                  <button className=" text-blue"> Install Github Desktop</button>
                </div>
                   
                    <div className="flex items-center mt-3">
                      <input type="radio" classname="mt-3" />
                      <div className="w-5 h-5 bg-gray-600 ml-3 mr-2  rounded-md border-white border-2"></div>
                      <p className="font-bold text-white">Public</p>
                    </div>
                    <p className="text-white text-center">
                      Anyone on the internet can see this repository
                    </p>
                    <div className="flex items-center mt-3">
                      <input type="radio" classname="mt-3" />
                      <div className="w-5 h-5 bg-gray-600 ml-3 mr-2  rounded-md border-white border-2"></div>
                      <p className="font-bold text-white">Private</p>
                    </div>
                    <p className="text-white  text-justify">
                      You choose who can see and commit to this repository
                    </p>
                    <button className="bg-green-500 rounded-md text-white mt-5 py-1 px-2">
                      Create a new ripository
                    </button>
                  </div>
                  <div className="w-[40%] h-[40%] bg-gray-600 border-white border-2  mb-5 py-5 px-6 ml-2 rounded-md items-center">
                    <p className="text-white font-bold">
                      Introduce yourself with a profile README
                    </p>
                    <p className="text-white mt-2">
                      A repository contains all of your project's files,
                      revision history, and collaborator discussion.
                    </p>
                    <div className="w-50 h-50 bg-gray-700 mt-3 border-gray-800 border-2 items-center flex justify-between text-white rounded-md py-2">
                      <p className="ml-4">sansfathan/README.md</p>
                      <button className="border-gring-gray-600 px-3 py-1 bg-green-400 rounded-md cursor-pointer mr-4">
                        Create
                      </button>
                    </div>
                    <div>
                      <div className="w-50 h-50 bg-gray-700 mt-3 border-gray-800 border-2   justify-between text-white rounded-md py-2">
                        <p className="ml-4">1 - Hi, I’m @sansfathan</p>
                        <p className="ml-4">2 - I’m interested in ...</p>
                        <p className="ml-4">3 - I’m currently learning ...</p>
                        <p className="ml-4">
                          4 - I’m looking to collaborate on
                        </p>
                        <p className="ml-4">5 - How to reach me ...</p>
                        <p className="ml-4">6</p>
                      </div>
                    </div>
                  </div>
                  

                </div>

              </div>
              {/* Jumbotron */}
            </header>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
