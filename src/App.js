import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import "./App.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import { useState } from "react";
import Page3 from "./pages/page3";

function App() {
  const array = [<Page1 />, <Page2 />, <Page3 />];
  const [index, setIndex] = useState(0);

  return (
    <div className="container-fluid">
      {/* NavBar */}
      <div className="row shadow-sm p-2 ">
        <div className="col-lg-8 col-md-6 col-sm-12 d-flex  justify-content-around g-2 flex-wrap flex-column align-items-center">
          <h2>DateR</h2>
          <p className=" text-center">
            A website that helps you perform date calculations
          </p>
        </div>

        <div className="col    mx-2 text-center">
          <h4 className=" d-md-block d-none">Made by TheLazyBusyCoder</h4>
          <div className="container">
            <div className="row">
              <div className="col">
                <a
                  className=""
                  href="https://www.linkedin.com/in/leo-devenasan-985757300/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin color="black" size={35} />
                </a>
              </div>
              <div className="col">
                <a
                  className=""
                  href="https://youtube.com/@thelazybusygamer?si=nzYl1Sq1erLaSKoH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube color="black" size={35} />
                </a>
              </div>
              <div className="col">
                <a
                  className=""
                  href="https://github.com/TheLazyBusyCoder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub color="black" size={35} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left box */}
      <div className="row">
        <div className="col-md-3 col-12 p-2">
          <div
            className="container-fluid custom-scrollbar overflow-y-scroll"
            // style={{ height: "60vh" }}
          >
            <div className="row shadow-lg rounded  ">
              <LeftSideBox
                name={"Number of Days "}
                active={index === 0 ? true : false}
                onClick={() => {
                  setIndex(0);
                }}
              />
              <LeftSideBox
                name={"Add or Substract"}
                active={index === 1 ? true : false}
                onClick={() => {
                  setIndex(1);
                }}
              />
              <LeftSideBox
                name={"Days left"}
                active={index === 2 ? true : false}
                onClick={() => {
                  setIndex(2);
                }}
              />
            </div>
          </div>
        </div>
        {/* Right box */}
        <div className="col p-2">{array[index]}</div>
      </div>
    </div>
  );
}

function LeftSideBox({ name, onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={`col-12 p-2 fs-5 text-break rounded text-light border border-3 someclass ${
        active ? "someclassactive" : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-9 col-sm-10 col-7  text-start">{name}</div>
          <div className="col-md-3 col-sm-1 col-3  text-end">
            <FaCircleArrowRight size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
