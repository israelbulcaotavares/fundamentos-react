import React, { useState } from "react";
import './Input.css'

export default props => {

    const [ valor, setValor ] = useState('Inicial')

    function quandoMudar(e) { 
        //console.log(e.target.value)
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex', /* para ficar embaixo do outro */
                flexDirection: 'column' /* para ficar embaixo do outro */
            }}></div>
            <input value={valor} onChange={quandoMudar}  /> {/* Componente controlado */}
            <input value={valor} readOnly  /> {/* Componente NÃO controlado */}
            <input value={undefined}  /> {/* componente com nenhuma vinculação ao estado */}
        </div>
    )
}