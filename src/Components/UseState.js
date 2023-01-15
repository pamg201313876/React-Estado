import React from 'react'

const SECURITY_CODE = 'paradigma';

export const UseState = ({ nombre }) => {

    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    React.useEffect(() => {
        if (loading) {
            setTimeout(() => {

                if(value === SECURITY_CODE){
                    setLoading(false)
                    setError(false)
                }else{
                    setError(true)
                    setLoading(false)
                }

                
            }, 2000)
        }
    }, [loading])


    return (
        <div>
            <h2>Eliminar {nombre}</h2>
            <p>Por favor, escribe el código de seguridad</p>
            {error && (
                <p>El código es incorrecto</p>
            )}
            {loading && (
                <p>Cargando...</p>
            )}
            <input 
                placeholder='Codigo de seguridad' 
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
            />
            <button
                onClick={() => {setLoading(true); setError(false)}}
            >Comparar</button>
        </div>
    )
}
