import logo from "../../assets/LandingPage/logoJCDVPNG.png"
import header from "../../assets/LandingPage/header.png"
import escuelas from "../../assets/LandingPage/1Img.jpg"
import encuentros from "../../assets/LandingPage/2Img.jpg"
import ayunos from "../../assets/LandingPage/4Img.jpg"
import david from "../../assets/LandingPage/david.png"
import cursos from "../../assets/LandingPage/actividad6.jpg"
// import camping from "../../assets/LandingPage/actividad3.jpg"

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
        <div className="w-screen bg-gradient-to-b from-neutral-800 to-[#0f0f0f]">
          <section className="area flex flex-row justify-between py-16">

          <picture className="flex flex-col justify-center items-center w-full my-5 lg:my-0 lg:w-[550px]">
            <img src={header} alt="" className="w-[90%]" />
            </picture>

            <article className="flex flex-col justify-evenly font-extralight items-start text-start w-[610px] h-[400px] text-white">
                <h3 className="text-6xl font-bold w-3/4">Sobre Nosotros</h3>
                <p>En Jesús Camino de Vida, cultivamos una fe auténtica basada en la enseñanza central de Juan 14:6: 'Yo soy el camino, la verdad y la vida. Nadie viene al Padre sino por mí'. Este versículo guía nuestras acciones y define nuestra misión de ser un faro de amor y esperanza.</p>
                <p>En nuestra comunidad, personas de diversas experiencias se congregan con un propósito común: crecer juntas en la luz de Cristo. Creemos en el poder transformador del amor y la enseñanza cristiana. Cada paso que das aquí te acerca más a la plenitud que se encuentra en la fe vivida con autenticidad. ¡Bienvenido a un lugar donde cada historia es parte de un viaje espiritual enriquecedor!</p>
            </article>

          </section>
          
          <section className="area flex flex-wrap flex-row justify-between items-center py-10  ">

            <article className="flex flex-col justify-evenly font-extralight items-start text-start w-[610px] h-[400px] text-white">
              <h3 className="text-6xl font-bold w-2/3">Eventos y Actividades</h3>
              <p>Nuestra iglesia es un lugar donde la comunidad cobra vida. Ofrecemos una variedad de eventos y actividades para todas las edades y grupos de interés. Desde grupos de estudio bíblico hasta actividades sociales y oportunidades de servicio, hay algo para todos. Aquí, te sentirás parte de algo más grande que tú mismo.</p>
              <p>Participar en nuestras actividades te brindará la oportunidad de fortalecer tu fe, construir amistades significativas y hacer una diferencia en nuestra comunidad local. Creemos que la fe en acción es una parte vital de nuestra vida cristiana.</p>
            </article>

            <picture className="flex flex-col justify-center items-center w-full lg:my-0 lg:w-[550px]">
              <img src={cursos} alt=""  className="w-full rounded-xl"/>
              {/* <img src={camping} alt="" className="w-[70%]" /> */}
            </picture>

          </section>

        </div>

          <section className="area flex justify-center items-center flex-col py-0 text-center my-20">
            <h2 className="text-6xl font-bold py-5">Nuestros Servicios</h2>
            <article className="flex justify-center items-center flex-col w-[80%] font-semibold text-neutral-600">
              <p>
              Nuestros servicios dominicales son el núcleo de nuestra comunidad. Cada domingo, nos reunimos para adorar a Dios a través de la música, la oración y el estudio de las Escrituras. Es un momento de reflexión y comunión, donde todos son bienvenidos, independientemente de su trasfondo o creencias anteriores.
              </p>
            </article>
            <section className="relative flex flex-wrap justify-evenly items-center flex-row  w-[100%]">
              <Cards img={encuentros} title="ENCUENTROS" text="Encuentros de 3 días: Únete a nosotros en un retiro espiritual de tres días, donde profundizamos en lecciones de vida y reflexiones inspiradoras. Descubre un espacio de renovación espiritual y crecimiento personal mientras compartimos experiencias y fortalecemos nuestra fe en comunidad."/>
              <Cards img={ayunos} title="AYUNOS" text="Noche de Ayunos: Te invitamos a unirse a nuestra comunidad en una noche de ayuno y oración. Durante este tiempo especial, experimentarás predicaciones inspiradoras, compartirás palabras de sabiduría y escucharás testimonios impactantes. Un momento para fortalecer tu conexión con Dios y tu comunidad" />
              <Cards img={escuelas} title="ESCUELAS " text="Escuela Cristiana para Todas las Edades: Nuestra escuela cristiana ofrece una variedad de cursos de educación cristiana para todas las edades. Al completar estos cursos, recibirás un diploma que reconoce tus logros en el crecimiento espiritual. ¡Únete a nosotros en este emocionante viaje de aprendizaje y fe!" />
              <i className='absolute right-0 text-6xl bx bx-last-page'></i>
            </section>
          </section>

        

        <section className="area flex flex-col justify-center items-center pb-14">
          <picture className="flex justify-center items-center w-[200px] h-[200px] bg-red-500 my-5 rounded-full overflow-hidden border-[5px] border-solid border-[#31759C] border-b-[#061A43] border-r-[#061A43]" >
            <img src={david} alt="" className="min-w-[110%]"/>
          </picture>
          <article className="w-2/3 text-center font-bold text-sm text-neutral-600">
            <p>"En Jesús Camino de Vida, vivimos por estos valores: Amor, Fe, Esperanza y Servicio. Como dice 1 Corintios 13:13, 'Ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor'. Nos inspiramos en estos principios para construir una comunidad basada en el amor y el servicio a los demás."</p>
          </article>

            <article className="relative w-full font-bold text-sm my-16 text-center flex justify-between items-center flex-col lg:flex-row lg:items-start">
              <p className="w-full lg:w-[520px]">¿Listo para unirte a nuestra comunidad? ¡Esperamos ansiosos darte la bienvenida y compartir este viaje de fe contigo! Si deseas saber más, asistir a un servicio o participar en nuestras actividades, ¡no dudes en ponerte en contacto con nosotros hoy mismo!</p>
              <picture className="flex justify-center items-center w-[80px] my-5 lg:my-0">
                <img src={logo} alt="" className="w-full" />
              </picture>
              <p className="w-full lg:w-[520px]">En Jesús Camino de Vida, creemos que no importa de dónde vengas, aquí encontrarás amor, apoyo y un propósito que trasciende las circunstancias. ¡Te invitamos a dar el paso y ser parte de nuestra comunidad de fe!</p>
            </article>

        </section>
        
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default LandingPage