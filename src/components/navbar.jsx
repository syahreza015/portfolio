import React, { useCallback, useContext, useEffect, useState } from "react";
import "../index.css";
import "../output.css";

import { ModeContext } from "../helper/context";

const Navbar = (props) => {
  const { dark, setDark } = useContext(ModeContext);
  const [mode, setMode] = useState("");
  const [themeReverse, setThemeReverse] = useState("");
  const [burgerId, setBurgerId] = useState("visible");

  useEffect(() => {
    dark == false ? setMode("dark-theme") : setMode("light-theme");
    dark == false
      ? setThemeReverse("light-theme")
      : setThemeReverse("dark-theme");
  });

  return (
    <nav className="flex justify-between h-full w-full py-1">
      <div className="title w-full h-full flex justify-center align-middle align-center">
        <div
          className={`w-1/4 ${themeReverse} rounded-md font-bold text-center h-12 flex justify-center align-center`}
        >
          {props.title}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
