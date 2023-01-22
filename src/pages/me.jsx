import React, { useContext, useEffect, useState } from "react";
import "../index.css";
import "../output.css";
import { ModeContext } from "../helper/context";

const Me = () => {
  const { dark, setDark } = useContext(ModeContext);
  const [mode, setMode] = useState("");

  useEffect(() => {
    dark == false ? setMode("dark-theme") : setMode("light-theme");
  });

  return (
    <main className="flex flex-col gap-3">
      <section
        className={`flex flex-col justify-center align-center gap-2 p-3`}
      >
        <span className={`${mode} w-3/4 text-center p-2 font-bold`}>
          <h2>ABOUT ME</h2>
        </span>
        <div
          className={`container ${mode} w-90 p-4 mx-auto text-center flex flex-col gap-3 justify-center align-center`}
        >
          <span className="text-center bg-slate-200 w-5/6 py-2 px-1 t-black">
            My name is Muhamad syahreza jaelani, but often called reza, i am 19
            years old, and currently a university student .I am a bachelor
            student currently, i am studying in Haluoleo University and i am in
            my 6th semester.
          </span>
          <span className="w-90">
            <img src="./image/default.png" alt="image" className="mainImage" />
          </span>
        </div>
      </section>
      <section className="flex flex-col justify-center align-center gap-2 w-full">
        <span className={`${mode} w-3/4 text-center p-2 font-bold`}>
          <h2>EDUCATION</h2>
        </span>
        <div
          className={`container ${mode} w-90 p-4 mx-auto text-center flex flex-col gap-3 justify-center align-center`}
        >
          <span className="text-center bg-slate-200 w-5/6 py-2 px-1 t-black">
            About my education, it is quite a long story, first i get into
            kindergarten at the age of 3, then i entered elementary school for 6
            years, then i get into middle school and high school 3 years each.
            And now i am currently studying in an university for a bachelor
            degree
          </span>
          <div className="image-placeholder w-90 flex flex-wrap justify-center gap-3">
            <img src="./image/default.png" alt="image" className="image" />
            <img src="./image/default.png" alt="image" className="image" />
            <img src="./image/default.png" alt="image" className="image" />
            <img src="./image/default.png" alt="image" className="image" />
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center align-center gap-2">
        <span className={`${mode} w-3/4 text-center p-2 font-bold`}>
          <h2>PERSONALITY</h2>
        </span>
        <div
          className={`container ${mode} w-90 p-4 mx-auto text-center flex flex-col gap-3 justify-center align-center`}
        >
          <span className="text-center bg-slate-200 w-5/6 py-2 px-1 t-black">
            I am a quiet person, more or less. i don't talk much, i am the
            observer type and thinks more than talk "
          </span>
          <span>
            <img src="./image/default.png" alt="image" className="mainImage" />
          </span>
        </div>
      </section>
      <section className="flex flex-col justify-center align-center gap-2">
        <span className={`${mode} w-3/4 text-center p-2 font-bold`}>
          <h2>HOBBY</h2>
        </span>
        <div
          className={`container ${mode} w-90 p-4 mx-auto text-center flex flex-col gap-3 justify-center align-center`}
        >
          <span className="text-center bg-slate-200 w-5/6 py-2 px-1 t-black">
            My hobby is individual task or activity. And currently i am enjoying
            coding, watching youtube and reading comics a lot"
          </span>
          <div className="w-90 mx-auto flex flex-wrap gap-3 justify-center">
            <img src="./image/default.png" alt="image" className="image" />
            <img src="./image/default.png" alt="image" className="image" />
            <img src="./image/default.png" alt="image" className="image" />
            <img src="./image/default.png" alt="image" className="image" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Me;
