//?client side rendering

import { getProducts } from "@/lib/api";
import { useEffect, useState } from "react";

export default function CSR() {
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