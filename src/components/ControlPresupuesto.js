import React from 'react'
import { cambioColor } from '../helpers/cambioColor'

export const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={cambioColor( presupuesto, restante )}>
                Restante: $ {restante}
            </div>
        </>
    )
}
