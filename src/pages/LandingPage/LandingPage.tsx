import logo from "../../assets/logoJCDVPNG.png"


function LandingPage() {
  return (
    <header className="flex h-screen w-screen justify-center items-start ">
      
      <nav className="area h-20 flex justify-between items-center text-gray-800 ">

          <picture className="flex justify-center items-center max-w-[10%] min-h-[80%] ">
            <img src={logo} alt="Jesus Camino de Vida" className="w-[50%]" />
          </picture>
          
        {/* <div className="">   Para un menu Responsive  */}

          <ul className="hidden justify-around items-center font-bold w-[40%] sm:flex">
            <li>
              <a href="#">Ministerios</a>
            </li>
            <li>
              <a href="#">Pastores</a>
            </li>
            <li>
              <a href="#">Horarios</a>
            </li>
          </ul>

        {/* </div> */}

        <div className="hidden min-w-[19%]  justify-between items-center max-phone:flex lg:flex">
          <a href="#" className="button">Log In</a>
          <a href="#" className="button">Sign In</a>
        </div>

      </nav>
    
    </header>
  )
}

export default LandingPage