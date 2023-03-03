import { useState } from "react";
import logo from "./images/logo.svg";
import mainsec from "./images/main-sec1.png";
import palm from "./images/palm1.png";
import junglepalm from "./images/sec3.png";
import junglepalm2 from "./images/sec2.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="box-title">
            <h1 className="company-name">Palmer</h1>
          </div>
          <div className="box-logo">
            <img src={logo} className="logo" alt="" />
          </div>
          <div className="box-title">
            <h1 className="company-name">Camp</h1>
          </div>
        </nav>
      </header>
      <main>
        <section className="main-sec">
          <div className="main-image-left">
            <img src={mainsec} className="main-sec-img" alt="" />
          </div>
          <div className="page-title-box">
            <h1>VENTA DE PALMERAS ALMERÍA</h1>
            <h1>-</h1>
            <h1>CAMPO DE NÍJAR</h1>
          </div>
          <div className="main-image-right">
            <img src={mainsec} className="main-sec-img" alt="" />
          </div>
        </section>
        <section className="first-sec">
          <h2 className="box-sec-title">CRIADAS ECOLÓGICAMENTE</h2>
          <div className="card-box">
            <div className="card">
              <img src={palm} className="card-image" alt="" />
              <div className="card-text">
                <h3 className="card-title">SMALL PLANTS</h3>
                <div className="card-separator"></div>
                <p>
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
                <p>
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
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  maiores eum beatae soluta corrupti quibusdam consectetur
                  repellat facilis? Voluptatem
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-sec">
          <div className="image-box-about-sec">
            <img src={junglepalm} className="about-sec-image" alt="" />
          </div>
          <div className="about-box">
            <h2 className="about-title">ABOUT US</h2>
            <p>
              Bienvenidos a Campo Palmer, una empresa líder en la producción de
              palmeras ecológicas de alta calidad. Estamos comprometidos con la
              creación de productos de primera categoría, cultivados de manera
              responsable y sostenible en armonía con el medio ambiente.
            </p>
            <p>
              Desde nuestros inicios, hemos trabajado arduamente para
              establecernos como un referente en la industria agrícola,
              destacando por la calidad de nuestros productos y el respeto que
              tenemos por la naturaleza. Utilizamos técnicas agrícolas
              innovadoras y sostenibles para asegurarnos de que nuestras
              palmeras crezcan en un ambiente saludable y natural.
            </p>
            <p>
              Gracias a nuestra dedicación y compromiso con la calidad y el
              medio ambiente, hemos logrado ganar la confianza y lealtad de
              nuestros clientes en todo el mundo. En Campo Palmer, nos
              enorgullece ser una empresa que se preocupa por el medio ambiente
              y por crear productos sostenibles que beneficien a todos.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
