export function Clase() {
    const habilidad = true;
    const text = "Boton";
    const placeholder = "valor input...";
    const size = 50;

    return (
        <section>
            <button disabled={!habilidad}>{text}</button>
            <input placeholder={placeholder} size={size}></input>
        </section>
    );
}

export function ManejadorEventos(){
    const handleClick = () => {
        console.log("Click realizado")
    }

    return (
        <section>
            <button onClick={handleClick}>Pulsa el boton</button>
        </section>
    )
}
