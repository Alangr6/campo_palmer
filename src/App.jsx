import logo from "./images/logo.svg";
import mainsec from "./images/main-sec1.webp";
import palm from "./images/palm12.webp";
import palm2 from "./images/palm5.webp";
import palm3 from "./images/palm1.webp";
import junglepalm from "./images/sec3.webp";
import worksecimg from "./images/work-sec.webp";
import "./App.css";

function App() {
  window.addEventListener("scroll", reveal);

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      }
    }
  }
  reveal();
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="box-title">
            <h1 className="company-name">Palmer</h1>
          </div>
          <div className="box-logo">
            <img
              src={logo}
              className="logo"
              title="Palmer Camp logo"
              alt="White and transparen palm tree"
              width="100%"
              height="auto"
            />
          </div>
          <div className="box-title">
            <h1 className="company-name">Camp</h1>
          </div>
        </nav>
      </header>
      <main>
        <section className="main-sec">
          <div className="main-image-left">
            <img
              src={mainsec}
              className="main-sec-img"
              title="Palm tree leaf"
              alt="Palm tree leaf, envolving the page title"
              width="100%"
              height="auto"
            />
          </div>
          <div className="page-title-box">
            <h1>VENTA DE PALMERAS ALMERÍA</h1>
            <h1>-</h1>
            <h1>CAMPO DE NÍJAR</h1>
          </div>
          <div className="main-image-right">
            <img
              src={mainsec}
              className="main-sec-img"
              title="Palm tree leaf"
              alt="Palm tree leaf, envolving the page title"
              width="100%"
              height="auto"
            />
          </div>
        </section>
        <section className="first-sec">
          <h2 className="box-sec-title reveal">CRIADAS ECOLÓGICAMENTE</h2>
          <div className="card-box">
            <div className="card reveal">
              <img
                src={palm}
                className="card-image"
                title="Palm trees farm"
                alt="Palm trees growth"
                width="100%"
                height="auto"
              />
              <div className="card-text">
                <h3 className="card-title reveal">BIO FARM</h3>
                <div className="card-separator reveal"></div>
                <p className="reveal">
                  Creemos que la naturaleza tiene su propia belleza y, por lo
                  tanto, cultivamos palmeras sin podar para mantener su aspecto
                  auténtico y natural.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <img
                src={palm2}
                className="card-image"
                title="Not pruned palm tree"
                alt="Not pruned palm tree growth"
                width="100%"
                height="auto"
              />
              <div className="card-text">
                <h3 className="card-title reveal">GROWTH</h3>
                <div className="card-separator reveal"></div>
                <p className="reveal">
                  Nuestro producto final son las hermosas palmeras podadas, que
                  han sido cuidadosamente moldeadas por expertos para resaltar
                  su belleza natural.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <img
                src={palm3}
                className="card-image"
                title="Pruned palm"
                alt="Pruned palm tree, final product"
                width="100%"
                height="auto"
              />
              <div className="card-text">
                <h3 className="card-title reveal">FINAL PRODUCT</h3>
                <div className="card-separator reveal"></div>
                <p className="reveal">
                  Palmeras elegantes y saludables, ideales para paisajes y
                  jardines, agrega un toque de elegancia y belleza natural a tu
                  hogar o negocio.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec work-color">
          <div className="sec-box work-text-box-width">
            <h2 className="sec-title work-color reveal">WORK</h2>
            <p className="reveal">
              Palmera de aceite: También conocida como palma de aceite africana,
              es una especie muy valiosa que produce un aceite rico en
              nutrientes y ampliamente utilizado en la industria alimentaria.
              Nuestras palmeras de aceite se cultivan de manera sostenible y
              ecológica, garantizando la calidad y la pureza del aceite
              producido.
            </p>
            <p className="reveal">
              Palmera datilera: Originaria del norte de África y el Medio
              Oriente, la palmera datilera produce frutos dulces y sabrosos
              conocidos como dátiles. En Campo Palmer, cultivamos palmeras
              datileras de alta calidad, garantizando que nuestros dátiles sean
              deliciosos y saludables.
            </p>
            <p className="reveal">
              Palmera de coco: La palmera de coco es una especie versátil que
              produce una variedad de productos, desde coco rallado hasta aceite
              de coco y agua de coco. En Campo Palmer, nuestras palmeras de coco
              se cultivan de manera ecológica y sostenible, garantizando que
              nuestros productos de coco sean frescos y de alta calidad.
            </p>
          </div>
          <div className="image-box-width">
            <img
              src={worksecimg}
              className="sec-image"
              title="Work section palm tree"
              alt="Palm tree work section image"
              width="100%"
              height="auto"
            />
          </div>
        </section>
        <section className="sec">
          <div className="image-box-width">
            <img
              src={junglepalm}
              className="sec-image"
              title="About section palm tree"
              alt="Palm tree about section image"
              width="100%"
              height="auto"
            />
          </div>
          <div className="sec-box image-box-width">
            <h2 className="sec-title reveal">NOSOTROS</h2>
            <p className="reveal">
              Bienvenidos a Campo Palmer, una empresa líder en la producción de
              palmeras ecológicas de alta calidad. Estamos comprometidos con la
              creación de productos de primera categoría, cultivados de manera
              responsable y sostenible en armonía con el medio ambiente.
            </p>
            <p className="reveal">
              Desde nuestros inicios, hemos trabajado arduamente para
              establecernos como un referente en la industria agrícola,
              destacando por la calidad de nuestros productos y el respeto que
              tenemos por la naturaleza. Utilizamos técnicas agrícolas
              innovadoras y sostenibles para asegurarnos de que nuestras
              palmeras crezcan en un ambiente saludable y natural.
            </p>
            <p className="reveal">
              Gracias a nuestra dedicación y compromiso con la calidad y el
              medio ambiente, hemos logrado ganar la confianza y lealtad de
              nuestros clientes en todo el mundo. En Campo Palmer, nos
              enorgullece ser una empresa que se preocupa por el medio ambiente
              y por crear productos sostenibles que beneficien a todos.
            </p>
          </div>
        </section>
      </main>
      <footer className="contact-sec">
        <h2>CONTACT US!</h2>
        <form action="https://formsubmit.co/@gmail.com" method="POST">
          <input type="text" name="name" id="" placeholder="Name" required />
          <input type="email" name="email" id="" placeholder="Email" required />
          <input type="phone" name="phone" id="" placeholder="Phone" required />
          <button type="submit">Submit</button>
        </form>
        <h3>+34 673 670 067</h3>
      </footer>
    </div>
  );
}

export default App;
