import { cardsProps } from "../../interfaces/type.p"


function Cards({img, text, title}: cardsProps) {
  return (
    <section className="w-[370px] h-[550px] flex justify-center items-center flex-col border border-solid border-black  bg-lime-500"> 
        <picture className="flex justify-center items-end w-[100%] min-h-[220px] bg-red-400 overflow-hidden rounded-xl">
            <img src={img} alt="Jesus Camino de Vida" className="w-[95%]"/>
        </picture>
        <article className="bg-red-500 ">
            <h3 className="text-2xl font-bold w-[75%]">{title}</h3>
            <p className="text-center">{text}</p>
        </article>
    </section>
  )
}

export default Cards