import React from 'react'

export const Gasto = ({ gasto, handleDelete }) => {
    
    const { nombre, cantidad, id } = gasto;
    // console.log(nombre,cantidad);
    
    return (
        <li className="gastos" onClick={() => handleDelete( cantidad, id)}>
            <p> 
                { nombre } 
                <span className="gasto"> $ {cantidad} </span>    
            </p>
        </li>
    )
}
