import React from "react";

function Spinner() {
  return (
    <div className="spinner-body text-center mt-3">
      <div className="spinner-center spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
