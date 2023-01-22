import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../index.css";
import "../output.css";
import { ModeContext } from "../helper/context";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname;
  const [status, setStatus] = useState("");
  const { dark, setDark } = useContext(ModeContext);
  const [themeReverse, setThemeReverse] = useState("");

  useEffect(() => {
    dark == false
      ? setThemeReverse("light-theme")
      : setThemeReverse("dark-theme");
  });

  return (
    <nav>
      <div className="container">
        <div className="upper-container text-end">
          <ul className="ul px-4 flex flex-col gap-3">
            <li
              id={status}
              className={`${themeReverse} p-1 hover:bg-slate-300  cursor-pointer`}
              onClick={() => {
                const path = "/";
                navigate(path);
              }}
            >
              Home
            </li>
            <li
              id={status}
              className={`${themeReverse} p-1 hover:bg-slate-300  cursor-pointer`}
              onClick={() => {
                const path = "/aboutme";
                navigate(path);
              }}
            >
              About Me
            </li>
            <li
              id={status}
              className={`${themeReverse} p-1 hover:bg-slate-300  cursor-pointer`}
              onClick={() => {
                const path = "/gallery";
                navigate(path);
              }}
            >
              Gallery
            </li>
            <li
              id={status}
              className={`${themeReverse} p-1 hover:bg-slate-300  cursor-pointer`}
              onClick={() => {
                const path = "/project";
                navigate(path);
              }}
            >
              Projects
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
