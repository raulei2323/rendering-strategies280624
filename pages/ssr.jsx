import { getProducts } from "@/lib/api";
import { useEffect, useState } from "react";

export default function SSR({products}) {
       function clickHandler() {
        const x = localStorage.getItem("x")
        console.log("x",x)
    }

    return(
        <main>
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
//?server side renderding
//?se ejecuta en cada request a la pagina
//?se ejecuta en el servidor

export async function getServerSideProps() {
    console.log("Hola desde getServerSideProps")

    const products = await getProducts()
    return{
        props: {
            message: "Hola desde el server",
            text: "Mucho texto",
            products: products,
        },
    }
}