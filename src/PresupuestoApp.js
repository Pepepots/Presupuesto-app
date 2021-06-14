import React, { useState } from 'react'
import { ControlPresupuesto } from './components/ControlPresupuesto';
import { Formulario } from './components/Formulario';
import { Gasto } from './components/Gasto';
import { PreguntaPresupuesto } from './components/PreguntaPresupuesto'

export const PresupuestoApp = () => {

    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    const [gastos, setGastos] = useState([]);

        
    const crearGasto = (gasto) => {
        setGastos([
            ...gastos,
            gasto
        ]);
        const presupuestoRestante = restante - gasto.cantidad;
        setRestante(presupuestoRestante)
    }

    const handleDelete = ( cantidad, id ) => {

        const nuevosGastos = gastos.filter( cita => cita.id !== id );
        setGastos( nuevosGastos )

        const presupuestoRestante = restante + parseInt( cantidad );
        setRestante(presupuestoRestante)
    }

    return (
        <div className="container titulo">
            <h1>Gasto Semanal</h1>

            <div className="contenido-principal">
                {
                    presupuesto === 0
                        ?
                        <PreguntaPresupuesto
                            setPresupuesto={setPresupuesto}
                            setRestante={setRestante}
                        />
                        :
                        <div className="row">
                            <div className="one-half column">
                                <Formulario
                                    crearGasto={crearGasto}
                                />
                            </div>

                            <div className="one-half column">
                                {
                                    gastos.length === 0
                                    ? <h2> No hay gastos </h2>
                                    : <h2> Administra tus gastos </h2>
                                }
                                <div className="gastos-realizados">
                                    {gastos.map(gasto => (
                                        <Gasto
                                            key={gasto.id}
                                            gasto={gasto}
                                            handleDelete={handleDelete}
                                        />
                                    ))}
                                </div>

                                <ControlPresupuesto 
                                    presupuesto={presupuesto}
                                    restante={restante}
                                />

                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
