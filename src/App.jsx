import { useState } from "react";
import logo from "./images/logo.svg";
import mainsec from "./images/trans.png";
import palm from "./images/palm1.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="box-logo">
            <img src={logo} className="logo" alt="" />
          </div>
          <div className="box-title">
            <h1 className="company-name">Palmer Camp</h1>
          </div>
        </nav>
      </header>
      <main>
        <section className="main-sec">
          <div className="page-title-box">
            <h1>Venta de palmeras Almeria</h1>
            <h1>-</h1>
            <h1>Campo de Níjar</h1>
          </div>
          <img src={mainsec} className="main-sec-img" alt="" />
        </section>
      </main>
      <main>
        <section className="first-sec">
          <h2 className="box-sec-title">CRIADAS ECOLOGICAMENTE</h2>
          <div className="card-box">
            <div className="card">
              <img src={palm} className="card-image" alt="" />
              <div className="card-text">
                <h3 className="card-title">SMALL PLANTS</h3>
                <div className="card-separator"></div>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  maiores eum beatae soluta corrupti quibusdam consectetur
                  repellat facilis? Voluptatem
                </p>
              </div>
            </div>
            <div className="card">
              <img src={palm} className="card-image" alt="" />
              <div className="card-text">
                <h3 className="card-title">SMALL PLANTS</h3>
                <div className="card-separator"></div>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  maiores eum beatae soluta corrupti quibusdam consectetur
                  repellat facilis? Voluptatem
                </p>
              </div>
            </div>
            <div className="card">
              <img src={palm} className="card-image" alt="" />
              <div className="card-text">
                <h3 className="card-title">SMALL PLANTS</h3>
                <div className="card-separator"></div>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  maiores eum beatae soluta corrupti quibusdam consectetur
                  repellat facilis? Voluptatem
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
