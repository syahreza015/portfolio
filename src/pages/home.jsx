import React, { useContext, useEffect, useState } from "react";
import "../index.css";
import "../output.css";
import { ModeContext } from "../helper/context";
import axios from "axios";

import { MAIN_URL } from "../config";

const Home = () => {
  const { dark, setDark } = useContext(ModeContext);
  const [mode, setMode] = useState("");

  useEffect(() => {
    dark == false ? setMode("dark-theme") : setMode("light-theme");
  });

  return (
    <main className="flex flex-col gap-3">
      <section className="flex flex-col justify-center align-center gap-2">
        <span className={`${mode} w-3/4 text-center text-white p-2 font-bold`}>
          <h1>MY PORTFOLIO</h1>
          <button
            onClick={() => {
              console.log(value);
            }}
          >
            tes
          </button>
        </span>
        <span className="w-90">
          <img
            src="./image/default.png"
            alt="image"
            className="mainImage w-80 md:w-70"
          />
        </span>
      </section>
      <section className="flex flex-col justify-center align-center gap-2">
        <span className={`${mode} w-3/4 text-center text-white p-2 font-bold`}>
          <h2>ABOUT THIS PAGE</h2>
        </span>
        <span className="text-center bg-slate-200 w-5/6 py-2 px-1 t-black">
          This page is my personal portfolio, which i built for fun. This
          website was built using react, express js, and mysql database. This
          website is a static web app I built and develop in 2023 as a bachelor
          student
        </span>
      </section>
    </main>
  );
};

export default Home;
