import logo from "../../assets/LandingPage/logoJCDVPNG.png"
import header from "../../assets/LandingPage/header.png"
import escuelas from "../../assets/LandingPage/1Img.jpg"
import encuentros from "../../assets/LandingPage/2Img.jpg"
import ayunos from "../../assets/LandingPage/4Img.jpg"
import { useState } from "react"
import Cards from "../../components/Cards/cards"

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

        <section className="area flex flex-row justify-between py-10 sm:pb-40 sm:pt-10 flex-wrap ">

          <article className="w-[560px] flex-grow">
            <h1 className="flex justify-center items-center text-5xl  font-black min-h-[200px] " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {hovered ? "Bienvenido a Jesús Camino de Vida: Donde la Fe Encuentra un Hogar." : "Encuentra Tu Camino en Jesús: Únete a Nuestra Comunidad." }
            </h1>
            <p className="font-regular">Bienvenidos a nuestra comunidad de fe, un lugar donde la gracia y el amor de Cristo se manifiestan en cada rincón. En nuestra iglesia evangélica, creemos que la fe en Jesucristo es la fuente de toda esperanza y transformación. Aquí, te invitamos a un viaje de descubrimiento espiritual, a encontrar un propósito más profundo en la vida y a construir relaciones significativas con Dios y con los demás.</p>
          </article>

          <picture className="flex justify-center items-center flex-grow w-[500px]">
            <img src={header} alt="Jesus camino de vida" className="w-[450px]" />
          </picture>

        </section>

      </header>
      <main>
        <div className="w-screen bg-neutral-800">
          <div className="area flex flex-row justify-between py-16">

            <section className="flex justify-center items-center flex-col w-[45%] text-slate-100">

              <article className="text-5xl font-bold pb-10">
                <h2 >Sobre Nosotros</h2>
              </article>

              <picture className="flex justify-center items-center w-[85%]">
              <img src={header} alt="" className="w-[90%]" />
              </picture>


            </section>

            <section className="flex justify-center items-center  w-[55%] ">
              <article className="text-white font-semibold">
                <p>En Jesús Camino de Vida, creemos en seguir a Jesús como el Camino, la Verdad y la Vida. Nuestra iglesia se basa en la profunda convicción de que Jesucristo es el Salvador y Redentor del mundo. Estamos comprometidos a ser portadores de esperanza y amor en un mundo que a menudo necesita ambas cosas con desesperación.</p>
              </article>
            </section>

          </div>
        </div>
        <section className="area flex justify-center items-center flex-col py-32 text-center ">
          <h2 className="text-5xl font-bold py-5">Nuestros Servicios</h2>
          <article className="flex justify-center items-center flex-col w-[80%] font-regular">
            <p>
            Nuestros servicios dominicales son el núcleo de nuestra comunidad. Cada domingo, nos reunimos para adorar a Dios a través de la música, la oración y el estudio de las Escrituras. Es un momento de reflexión y comunión, donde todos son bienvenidos, independientemente de su trasfondo o creencias anteriores.
            </p>
          </article>
          <section className="flex justify-evenly items-center flex-row  w-[100%] ">
            <Cards img={encuentros} text="Encuentros de 3 días: Únete a nosotros en un retiro espiritual de tres días, donde profundizamos en lecciones de vida y reflexiones inspiradoras. Descubre un espacio de renovación espiritual y crecimiento personal mientras compartimos experiencias y fortalecemos nuestra fe en comunidad." title="Encuentros"/>
            <Cards img={ayunos} text="Noche de Ayunos: Te invitamos a unirse a nuestra comunidad en una noche de ayuno y oración. Durante este tiempo especial, experimentarás predicaciones inspiradoras, compartirás palabras de sabiduría y escucharás testimonios impactantes. Un momento para fortalecer tu conexión con Dios y tu comunidad" title="Ayunos"/>
            <Cards img={escuelas} text="Escuela Cristiana para Todas las Edades: Nuestra escuela cristiana ofrece una variedad de cursos de educación cristiana para todas las edades. Al completar estos cursos, recibirás un diploma que reconoce tus logros en el crecimiento espiritual. ¡Únete a nosotros en este emocionante viaje de aprendizaje y fe!" title="Escuelas "/>
          </section>
        </section>
      </main>
    </>
  )
}

export default LandingPage