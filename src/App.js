import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import "./App.css";
import Index1 from "./pages/Index1";
import Index2 from "./pages/Index2";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(<Index1 />);

  return (
    <div className="container-fluid">
      {/* NavBar */}
      <div className="row shadow-lg p-2">
        <div className="col-9">
          <h2>DateR</h2>
          <p>- A website that helps you perform date calculations</p>
        </div>

        <div className="col d-md-block d-none  mx-2 text-center">
          <h4>Made by TheLazyBusyCoder</h4>
          <div className="container">
            <div className="row">
              <div className="col">
                <FaLinkedin size={35} />
              </div>
              <div className="col">
                <FaYoutube size={35} />
              </div>
              <div className="col">
                <FaInstagram size={35} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left box */}
      <div className="row">
        <div className="col-3 p-2">
          <div className="container-fluid">
            <div className="row">
              <LeftSideBox
                name={"How many days has passed"}
                onClick={() => {
                  setPage(<Index1 />);
                }}
              />
              <LeftSideBox
                name={"Function is very usefull"}
                onClick={() => {
                  setPage(<Index2 />);
                }}
              />
            </div>
          </div>
        </div>
        {/* Right box */}
        <div className="col p-2">{page}</div>
      </div>
    </div>
  );
}

function LeftSideBox({ name, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`col-12 p-2 fs-5 rounded text-light border border-3 someclass`}
    >
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-9 text-start">{name}</div>
          <div className="col text-end">
            <FaCircleArrowRight size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
