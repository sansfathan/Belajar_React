import React, { useRef } from 'react';
export default function RefTutorial() {
  //   const inputRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const topRef = useRef(null);

  //   const onClick = () => {
  //     console.log("Ref Input =>", inputRef.current);

  //     inputRef.current.focus();
  //     inputRef.current.value = "Naufal";
  //     inputRef.placeholder = "Ubah PlaceHolder";
  //     inputRef.current.className = "border border-red-500 bg-red-500";
  //     inputRef.current.type = "Password";
  //   };

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollToTop = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div ref={topRef}>
      {/* <h1>Naufal</h1>
      <input ref={inputRef} type={"text"} placeholder="Write Your"/>
      <button onClick={onClick}>Change Name</button> */}
      <div className="space-x-5">
        <button
          onClick={() => {
            scrollToSection(homeRef);
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            scrollToSection(aboutRef);
          }}
        >
          About
        </button>
      </div>
      <div ref={homeRef} className="h-screen w-full bg-red-500 pt-10">
        <h2 className="text-black-500 font-bold">Home</h2>
      </div>
      <div ref={aboutRef} className="h-screen w-full bg-blue-500 pt-10">
        <h2 className="text-black-500 font-bold">About</h2>
      </div>
      <button
        onClick={() => {
          scrollToTop(topRef);
        }}
        className="fixed bg-red-500 cursor-pointer z-10 bottom-2 right-5 "
      >
        Back To Top
      </button>
    </div>
  );
}
