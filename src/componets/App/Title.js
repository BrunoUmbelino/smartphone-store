import React from "react";

export default function Title({ children }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-title text-center">
        <h1>{children}</h1>
      </div>
    </div>
  );
}
