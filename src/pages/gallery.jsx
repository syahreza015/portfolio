import React from "react";
import "../index.css";
import "../output.css";
import { useContext, useState, useEffect } from "react";

import { ModeContext } from "../helper/context";

const Gallery = () => {
  const { dark, setDark } = useContext(ModeContext);
  const [mode, setMode] = useState("");
  const [themeReverse, setThemeReverse] = useState("");

  useEffect(() => {
    dark == false ? setMode("light-theme") : setMode("dark-theme");
    dark == false
      ? setThemeReverse("dark-theme")
      : setThemeReverse("light-theme");
  }, [dark]);
  return (
    <main className="flex flex-col gap-3">
      <section className="flex flex-col justify-center align-center gap-2">
        <span
          className={`${themeReverse} w-3/4 text-center text-white p-2 font-bold`}
        >
          <h1>PHOTO GALLERY</h1>
        </span>
        <div
          className={`${themeReverse} w-90 flex flex-wrap gap-3 justify-center py-3`}
        >
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>{" "}
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>{" "}
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>{" "}
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>{" "}
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>{" "}
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>{" "}
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>{" "}
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>{" "}
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>{" "}
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>{" "}
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>{" "}
          <span className={`p-4 ${mode} rounded-md`}>
            <img src="./image/default.png" alt="" className="image" />
          </span>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
