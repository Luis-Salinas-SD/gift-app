import { useState } from 'react';

const GiftExpertApp = () => {
    //Hook
    let [contenido, setContenido] = useState(true);

    //Funcion para actualizar el estado
    function agregar() {
        return setContenido(contenido ? contenido = false : contenido = true);
    }

    return (
        <>
            {/* Titulo */}
            <h2>Aplicación de Gifs</h2>

            {/* Input */}
            <div className="card-grid">
                {/* evento para actualizar el state */}
                <button onClick={agregar}>Cambiar</button>
            </div>

            <span className='{}'>{ }</span>

            {/* Listado de Gifs */}
        </>
    )
}

export default GiftExpertApp
