import React from "react";
import "../index.css";
import "../output.css";
import { ModeContext } from "../helper/context";
import { useContext, useState, useEffect } from "react";

const Project = () => {
  const { dark, setDark } = useContext(ModeContext);
  const [mode, setMode] = useState("");
  const [themeReverse, setThemeReverse] = useState("");

  useEffect(() => {
    dark == false ? setMode("dark-theme") : setMode("light-theme");
    dark == false
      ? setThemeReverse("light-theme")
      : setThemeReverse("dark-theme");
  }, [dark]);
  return (
    <main className="flex flex-col gap-3">
      <section className="flex flex-col justify-center align-center gap-2">
        <span className={`${mode} w-3/4 text-center text-white p-2 font-bold`}>
          <h1>PROJECTS</h1>
        </span>
        <div className={`${mode} w-90 flex flex-wrap gap-5 p-3 justify-center`}>
          <div
            className={`box w-350 flex flex-col justify-center align-center ${themeReverse} p-3`}
          >
            <div className="box-title">Title</div>
            <div className="box-image">
              <img src="./image/default.png" alt="image" className="image" />
            </div>
            <div className="box-descroption text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              voluptatibus sunt! Iusto voluptas totam natus vero nam quos optio
              cumque perferendis doloremque. Nihil, dolores aspernatur
              doloremque repellendus id corporis laudantium.
            </div>
          </div>
          <div
            className={`box w-350 flex flex-col justify-center align-center ${themeReverse} p-3`}
          >
            <div className="box-title">Title</div>
            <div className="box-image">
              <img src="./image/default.png" alt="image" className="image" />
            </div>
            <div className="box-descroption text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              voluptatibus sunt! Iusto voluptas totam natus vero nam quos optio
              cumque perferendis doloremque. Nihil, dolores aspernatur
              doloremque repellendus id corporis laudantium.
            </div>
          </div>
          <div
            className={`box w-350 flex flex-col justify-center align-center ${themeReverse} p-3`}
          >
            <div className="box-title">Title</div>
            <div className="box-image">
              <img src="./image/default.png" alt="image" className="image" />
            </div>
            <div className="box-descroption text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              voluptatibus sunt! Iusto voluptas totam natus vero nam quos optio
              cumque perferendis doloremque. Nihil, dolores aspernatur
              doloremque repellendus id corporis laudantium.
            </div>
          </div>
          <div
            className={`box w-350 flex flex-col justify-center align-center ${themeReverse} p-3`}
          >
            <div className="box-title">Title</div>
            <div className="box-image">
              <img src="./image/default.png" alt="image" className="image" />
            </div>
            <div className="box-descroption text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              voluptatibus sunt! Iusto voluptas totam natus vero nam quos optio
              cumque perferendis doloremque. Nihil, dolores aspernatur
              doloremque repellendus id corporis laudantium.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
