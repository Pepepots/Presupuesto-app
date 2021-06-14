import { useState } from 'react'
import { useForm } from '../hooks/useForm'
import { Error } from './Error';

export const PreguntaPresupuesto = ({ setPresupuesto, setRestante }) => {
    
    const [ form , handleInputChange, reset ] = useForm({
        presupuestoForm: ''
    });

    const [errores, setError] = useState([])

    const { presupuestoForm } = form;

    const presupuesto = parseInt(presupuestoForm);

    const handleSubmit = (e) => {

        e.preventDefault()

        // Validar
        if ( presupuesto < 1 ) {
            setError([
                'El presupuesto es 0 o menor'
            ]);
            return;
        }else if ( isNaN( presupuesto ) ){
            setError([
                'No has ingreado el presupuesto'
            ])
            return;
        }

        setError([]);
        reset();
        setPresupuesto(presupuesto);
        setRestante(presupuesto);
    }


    return (
        <>
            <h2> Coloca tu presupuesto </h2>

            {
                errores.length !== 0 
                    ?<Error
                        error={errores} 
                    />
                    :null
            }

            <form onSubmit={ handleSubmit }>
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    name="presupuestoForm"
                    onChange={handleInputChange}
                    value={presupuestoForm}
                />

                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />  
            </form>    
        </>
    )
}
