import { getProducts } from "@/lib/api";
import { useEffect, useState } from "react";

export default function SSR(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then((products) => setProducts(products))
        .catch((err) => console.error(err))

    }, [])

    function clickHandler() {
        const x = localStorage.getItem("x")
        console.log("x",x)
    }

    return(
        <main>
            <p>{props.message}</p>
            <p>{props.text}</p>
            <h1>Productos:</h1>

            <button onClick={clickHandler}>Dame click perro</button>
            {products.map((product, idx) => {
                return(
                    <article key={`prod-${idx}`}>
                        <img src={product.thumbnail} />
                        <p>{product.title}</p>

                    </article>
                )
            })}
        </main>
    )
}

export function getServerSideProps() {
    console.log("Hola desde getServerSideProps")
    return{
        props: {
            message: "Hola desde el server",
            text: "Mucho texto",
        },
    }
}