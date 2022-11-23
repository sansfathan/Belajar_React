import LayoutEffect from "./page/useEffect";
import React from "react";
import RefTutor from "./page/home";
import Parent from "./page/optimize";
function App () {
  return (
    <React.Fragment>
      <h1 className="bg-red-500">Latihan Export Import</h1>
     <RefTutor/>
     <LayoutEffect/>
     <Parent/>
    </React.Fragment>
  );
}
export default App;