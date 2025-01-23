import Cuerpo from "./cuerpo";

const Miniatura = () => { 
    return (
        <section className="section">
            <div>
                <h1 className="title is-1 centrar">Our clients</h1>
            </div>
            <div className="fixed-grid has-1-cols centrar">
                <Cuerpo/>
            </div>
        </section>
    );
}

export default Miniatura;