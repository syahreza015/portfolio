import { useContext, useEffect, useState } from "react";
import "./App.css";
import "./output.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ModeContext } from "./helper/context";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Me from "./pages/me";
import Gallery from "./pages/gallery";
import Project from "./pages/project";
import InputGallery from "./admin/galleryInput";

function App() {
  const [dark, setDark] = useState(true);
  const [mode, setMode] = useState("");
  const [theme, setTheme] = useState("");
  const [themeReverse, setThemeReverse] = useState("");
  const position = useLocation();
  const current = position.pathname;
  const path = (current) => {
    switch (current) {
      case "/":
        return "HOME";
      case "/aboutme":
        return "ABOUT ME";
      case "/gallery":
        return "GALLERY";
      case "/project":
        return "PROJECT";
      case "/inputGallery":
        return "INPUT GALLERY";
    }
  };
  const currentPath = path(current);

  const [logoSource, setLogoSource] = useState("moon.svg");
  const [sideId, setSideId] = useState("hidden");
  const [burgerId, setBurgerId] = useState("visible");

  useEffect(() => {
    dark == false ? setMode("Light") : setMode("Dark");
    dark == false ? setTheme("light-theme") : setTheme("dark-theme");
    dark == false
      ? setThemeReverse("dark-theme")
      : setThemeReverse("light-theme");
  }, [dark]);

  const Svg = () => {
    if (dark == true) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          viewBox="0 0 48 48"
          className={` ${theme} w-7 h-7`}
        >
          <path
            d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z"
            width={20}
            height={20}
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          viewBox="0 0 48 48"
          className={` ${theme} w-7 h-7`}
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"
          />
        </svg>
      );
    }
  };

  return (
    <ModeContext.Provider value={{ dark, setDark }}>
      <div className="App">
        <div className="upper flex h-full">
          <div
            className={`${themeReverse} sidebar h-full w-48 flex flex-col py-2 z-10`}
            id={sideId}
          >
            <span
              className="rad-5 cursor-pointer flex justify-end close mb-3"
              onClick={() => {
                setSideId("hidden");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                className={`${themeReverse} svg bg-invisible hover:fill-slate-500`}
                onClick={() => {
                  setSideId("hidden");
                  setBurgerId("visible");
                }}
              >
                <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
              </svg>
            </span>
            <Sidebar />
            <div className="lower-container mt-auto px-3 py-3 flex justify-end gap-5 align-middle align-center flex-col h-2/6">
              <button
                className={`w-full ${theme} button rounded-md mt-2 px-3 py-1 flex justify-center gap-2 align-center`}
                onClick={() => {
                  dark == true ? setDark(false) : setDark(true);
                }}
              >
                <span>
                  <Svg />
                </span>
                {mode}
              </button>
            </div>
          </div>
          <div className="content w-full h-full flex flex-col">
            <div className={`${themeReverse} nav w-full flex px-3`}>
              <svg
                id={burgerId}
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                className={`${themeReverse} bg-transparent bg-invisible cursor-pointer hover:fill-slate-300 absolute`}
                onClick={() => {
                  setSideId("visible");
                }}
              >
                <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
              </svg>
              <Navbar title={currentPath} />
            </div>
            <div className={`${theme} body flex-grow overflow-y-scroll py-2`}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<Me />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/project" element={<Project />} />
                <Route path="/inputGallery" element={<InputGallery />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </ModeContext.Provider>
  );
}

export default App;
