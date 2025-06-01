import "../../styles/productos.scss"
import Link from "next/link";
import MenuProducts from "@/components/products/MenuProducts/menuProducts";
import DesertFrameCalculator from "@/components/products/contenido/desertFrameCalculator";


export default function Products() {
    return (
        <div className=" mt-6 mr-6 ml-6">
            <div className="parent">
                <div className="div1">
                    <div>
                        <h1 className="title rosa">Desert Frame Calculator</h1>
                        <DesertFrameCalculator />
                    </div>
                </div>
                <div className="div2 mt-4">
                    <MenuProducts />
                </div>
                <div className="div3 mt-4"> 
                    <div className="block">
                        <h1 className="title rosa">Products</h1>
                    </div>
                    <div className="block">
                        <p>
                            Aqui dejamos algunos ejemplos de productos de scripts que han proporcionado ayuda
                            a muestros socios y miembros del equipo.
                        </p>
                    </div>
                    <div className="block">
                        <p>
                            Pese a ser codigos publicos prohibimos el uso comercial y/o lucrativo de estos proyectos.
                            solo son ejemplos visuales usado por nuestro equipo y socios.
                            Pese a ser informacion publica forman parte del negocio y trabajo de personas que confian
                            en nuestra calidad y eficiecia.
                        </p>
                    </div>
                    <div>
                        <Link href='/' >termns & conditions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}