import logo from "../../assets/LandingPage/logoJCDVPNG.png"
import header from "../../assets/LandingPage/header.png"
import { useRef, useState } from "react"


function LandingPage() {
  const [hovered, setHovered] = useState(true)

  const handleMouseEnter = () => {
    setHovered(false);
  };
  const handleMouseLeave = () => {
    setHovered(true);
  };

  return (
    <>
      <header>

        <nav className="area h-20 flex justify-between items-center text-gray-800 ">

            <picture className="flex justify-center items-center max-w-[100px] min-h-[80%">
              <img src={logo} alt="Jesus Camino de Vida" className="w-[65%] cursor-pointer" />
            </picture>

            <ul className="hidden justify-around items-center font-bold w-[350px] sm:flex ">
              <li className="hover:text-blue-light transitionColor">
                <a href="#">Ministerios</a>
              </li>
              <li className="hover:text-blue-light transitionColor">
                <a href="#">Pastores</a>
              </li>
              <li className="hover:text-blue-light transitionColor">
                <a href="#">Horarios</a>
              </li>
            </ul>

        </nav>

        <section className="area flex flex-row justify-between py-10 sm:py-16 flex-wrap bg-lime-500">

          <article className="w-[560px] flex-grow">
            <h1 className="flex justify-center items-center text-5xl  font-black min-h-[200px] " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {hovered ? "Bienvenido a Jesús Camino de Vida: Donde la Fe Encuentra un Hogar." : "Encuentra Tu Camino en Jesús: Únete a Nuestra Comunidad." }
            </h1>
            <p className="font-regular ">Bienvenidos a nuestra comunidad de fe, un lugar donde la gracia y el amor de Cristo se manifiestan en cada rincón. En nuestra iglesia evangélica, creemos que la fe en Jesucristo es la fuente de toda esperanza y transformación. Aquí, te invitamos a un viaje de descubrimiento espiritual, a encontrar un propósito más profundo en la vida y a construir relaciones significativas con Dios y con los demás.</p>
          </article>

          <picture className="flex justify-center items-center flex-grow w-[500px]">
            <img src={header} alt="Jesus camino de vida" className="w-[450px]" />
          </picture>

        </section>

      </header>
      <main>

        <picture>
          <img src="" alt="" />
        </picture>

        <section className="w-screen bg-neutral-800 text-slate-100">
          <article>
            hola
          </article>
        </section>

      </main>
    </>
  )
}

export default LandingPage