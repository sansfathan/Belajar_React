import React, { useRef } from "react";
export default function RefTutor() {
  const inputref = useRef();
  const homeRef = useRef();
//   const aboutRef = useRef();
//   const optimizeRef = useRef();
  const topRef = useRef();

  const onClick = () => {
    console.log(inputref.current);
    inputref.current.focus();
    inputref.current.value = "fathan";
    inputref.current.placeholder = "apa";
    inputref.current.type = "Di ubah";
  };

  const scrollToSection = (ref) => {
    console.log("jalan 1");
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToTop = (ref) => {
    console.log("jalan 2");
    window.scrollTo({
      top: 0,
      // top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div ref={topRef}>
        <header>
          <nav className="navbar navbar-expand-lg shadow-md py-2 bg-[#404258] relative flex items-center w-full justify-between">
            
          </nav>
        </header>

        
        <button
          onClick={() => {
            scrollToTop(topRef);
          }}
          className="fixed bg-green-500 rounded-full w-10 h-10 cursor-pointer z-10 bottom-2 right-5 font-bold text-white "
        >
          ^
        </button>
      </div>
    </div>
  );
}