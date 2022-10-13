import React from "react";

export default function Input({ label,color="white", isError, textError, ...props }) {
  return (
    <div className="input">
      
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <input style={{  borderRadius:"5px",textAlign:"center",border:"1px solid white", backgroundColor: color}} {...props} className="input-text border" id={label} />
      {isError && <p className="error">{textError} </p>}
    </div>
  );
}
