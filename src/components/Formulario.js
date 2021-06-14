import { useState } from 'react';
import { useForm } from '../hooks/useForm'
import { Error } from './Error';

export const Formulario = ({ crearGasto }) => {

    const [ gasto, handleInputChange, reset ] = useForm({
        nombre:  '',
        cantidad: ''
    });
    const [errores, setError] = useState([]);
    const [counter, setCounter] = useState(0);

    const { nombre, cantidad } = gasto;

    const handleSubmit = (e) => {
        
        e.preventDefault();

        // Validar
            if ( nombre.length < 3 ){
                setError([
                    'El nombre es muy corto'
                ]);
                return;
            }else if ( cantidad < 1 ) {
                setError([
                    'La cantidad es 0 o menor'
                ]);
                return;
            }else if ( isNaN( cantidad ) ){
                setError([
                    'No has ingreado una cantidad'
                ])
                return;
            };
        
        gasto.id = counter;

        crearGasto( gasto )
        setError([]);
        setCounter( counter + 1 );
        reset();
        
    }

    return (

        <> 
            <h2> Agrega tus gastos aqui </h2>
            {
                errores.length !== 0 
                    ?<Error
                        error={errores} 
                    />
                    :null
            }        
            <form onSubmit = { handleSubmit }>
                
                <div className="campo">
                    <label> Nombre Gasto </label>
                    <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        onChange={handleInputChange}
                        name="nombre"
                        value={ nombre }
                    />
                </div>

                <div className="campo">
                    <label> Cantidad Gasto </label>
                    <input 
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        onChange={handleInputChange}
                        name="cantidad"
                        value={ cantidad }
                    />
                </div>

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Gasto"
                />

            </form>
        </>
    )
}
