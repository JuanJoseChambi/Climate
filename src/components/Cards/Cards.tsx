import { cardsProps } from "../../interfaces/type.p"


function Cards({img, text, title}: cardsProps) {
  return (
    <section className="w-[340px] h-[550px] flex justify-center items-center flex-col rounded-md hover:scale-105 transition-transform duration-300 "> 
        <picture className="flex justify-center items-end w-[90%] h-[275px] max-h-[300px]  overflow-hidden rounded-xl ">
            <img src={img} loading="lazy" alt="Jesus Camino de Vida" className="w-[95%] rounded-xl"/>
        </picture>
        <article className="">
            <h3 className="text-2xl font-semibold tracking-widest w-full py-2">{title}</h3>
            <p className="text-center text-neutral-600 font-semibold text-sm">{text}</p>
        </article>
    </section>
  )
}

export default Cards