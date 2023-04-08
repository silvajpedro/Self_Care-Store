import "./Card_style.scss"

export default function Card({products}){
    return(
        <>
            <figure>
                <img src={products} alt="produto loja" />
                <figcaption>Lorem ipsum dolor sit</figcaption>
                <p>R$<span>50,00</span></p>
            </figure>
           
        </>
    )
}