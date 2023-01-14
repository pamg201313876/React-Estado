import React from 'react'

export const UseState = ({ nombre }) => {

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
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
            <input placeholder='Codigo de seguridad' />
            <button
                onClick={() => setLoading(true)}
            >Comparar</button>
        </div>
    )
}
