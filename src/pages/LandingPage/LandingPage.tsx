import logo from "../../assets/LandingPage/logoJCDVPNG.png"
import header from "../../assets/LandingPage/header.png"
import escuelas from "../../assets/LandingPage/1Img.jpg"
import encuentros from "../../assets/LandingPage/2Img.jpg"
import ayunos from "../../assets/LandingPage/4Img.jpg"
import david from "../../assets/LandingPage/david.png"
import { useState } from "react"
import Cards from "../../components/Cards/Cards"

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
        <section className="w-screen bg-gradient-to-b from-neutral-800 to-[#0f0f0f]">
          <div className="area flex flex-row justify-between py-16">

            <section className="flex justify-center items-center flex-col w-[45%] text-slate-100">

              <article className="text-6xl font-bold pb-10">
                <h2 >Sobre Nosotros</h2>
              </article>

              <picture className="flex justify-center items-center w-[85%]">
              <img src={header} alt="" className="w-[90%]" />
              </picture>


            </section>

            <section className="flex justify-center items-center  w-[55%] ">
              <article className="text-white font-extralight">
                <p>En Jesús Camino de Vida, creemos en seguir a Jesús como el Camino, la Verdad y la Vida. Nuestra iglesia se basa en la profunda convicción de que Jesucristo es el Salvador y Redentor del mundo. Estamos comprometidos a ser portadores de esperanza y amor en un mundo que a menudo necesita ambas cosas con desesperación.</p>
              </article>
            </section>

            

          </div>
          <section className="area flex justify-center items-center flex-col py-10 text-center">
            <h2 className="text-6xl font-bold py-5 text-white">Nuestros Servicios</h2>
            <article className="flex justify-center items-center flex-col w-[80%] font-extralight text-white">
              <p>
              Nuestros servicios dominicales son el núcleo de nuestra comunidad. Cada domingo, nos reunimos para adorar a Dios a través de la música, la oración y el estudio de las Escrituras. Es un momento de reflexión y comunión, donde todos son bienvenidos, independientemente de su trasfondo o creencias anteriores.
              </p>
            </article>
            <section className=" relative flex flex-wrap justify-evenly items-center flex-row  w-[100%]">
              <Cards img={encuentros} title="ENCUENTROS" text="Encuentros de 3 días: Únete a nosotros en un retiro espiritual de tres días, donde profundizamos en lecciones de vida y reflexiones inspiradoras. Descubre un espacio de renovación espiritual y crecimiento personal mientras compartimos experiencias y fortalecemos nuestra fe en comunidad."/>
              <Cards img={ayunos} title="AYUNOS" text="Noche de Ayunos: Te invitamos a unirse a nuestra comunidad en una noche de ayuno y oración. Durante este tiempo especial, experimentarás predicaciones inspiradoras, compartirás palabras de sabiduría y escucharás testimonios impactantes. Un momento para fortalecer tu conexión con Dios y tu comunidad" />
              <Cards img={escuelas} title="ESCUELAS " text="Escuela Cristiana para Todas las Edades: Nuestra escuela cristiana ofrece una variedad de cursos de educación cristiana para todas las edades. Al completar estos cursos, recibirás un diploma que reconoce tus logros en el crecimiento espiritual. ¡Únete a nosotros en este emocionante viaje de aprendizaje y fe!" />
              {/* <i className='absolute right-0 text-5xl bx bx-plus-circle text-white '></i> */}
              <i className='absolute right-0 text-white text-6xl bx bx-last-page'></i>
            </section>
          </section>
        </section>

        <section className="area flex flex-col justify-center items-center py-14">
          <picture className="flex justify-center items-center w-[200px] h-[200px] bg-red-500 my-5 rounded-full overflow-hidden border-[5px] border-solid border-[#31759C] border-b-[#061A43] border-r-[#061A43]" >
            <img src={david} alt="" className="min-w-[110%]"/>
          </picture>
          <article className="w-2/3 text-center font-bold text-sm">
            <p>En Jesús Camino de Vida, nuestros valores fundamentales son el Amor, la Fe, la Esperanza y el Servicio. Creemos que el amor es el vínculo que une a nuestra comunidad, la fe es la base de nuestra relación con Dios, la esperanza nos impulsa hacia adelante y el servicio nos lleva a amar y ayudar a los demás.</p>
          </article>
        </section>
        
      </main>
    </>
  )
}

export default LandingPage