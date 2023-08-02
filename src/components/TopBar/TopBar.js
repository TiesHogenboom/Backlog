import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <button className="topbar__button">
        <a
          href="https://github.com/TiesHogenboom/Backlog#readme"
          target="_blank"
          
          className="topbar__buttonLink"
        >
          How does this work
        </a>
      </button>
    </div>
  );
};

export default TopBar;
