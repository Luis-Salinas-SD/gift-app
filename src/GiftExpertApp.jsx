import { useState } from 'react';

const GiftExpertApp = () => {
    //Hook
    const [categorias, setCategorias] = useState(['one punch', 'koku']);

    const addCat = () => {
        setCategorias([...categorias, 'valorant'])
    }

    console.log(categorias);
    return (
        <>
            {/* Titulo */}
            <h2>Aplicación de Gifs</h2>

            {/* Input */}
            <div className="card-grid">

            </div>

            {/* Listado de Gifs */}

            {<ol>
                {
                    categorias.map((categoria) => {
                        return <li key={categoria}>{categoria}</li>
                    })
                }
            </ol>}
            <button onClick={addCat}>Agregar</button>
        </>
    )
}

export default GiftExpertApp
