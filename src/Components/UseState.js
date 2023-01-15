import React from 'react'

const SECURITY_CODE = 'paradigma';

export const UseState = ({ nombre }) => {

    /*const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);*/
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false
    })


    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {

                console.log(state)

                if (state.value === SECURITY_CODE) {
                    setState({ ...state, loading: false, error: false, confirmed: true })
                } else {
                    setState({ ...state, loading: false, error: true, })
                }
            }, 2000)
        }
    }, [state.loading])



    if (!state.deleted && !state.confirmed) {
        return (
            <div>
                <h2>Eliminar {nombre}</h2>
                <p>Por favor, escribe el código de seguridad</p>
                {state.error && (
                    <p>El código es incorrecto</p>
                )}
                {state.loading && (
                    <p>Cargando...</p>
                )}
                <input
                    placeholder='Codigo de seguridad'
                    value={state.value}
                    onChange={(event) => {
                        setState({ value: event.target.value })
                    }}
                />
                <button
                    onClick={() => { setState({ ...state, loading: true, error: false }) }}
                >Comparar</button>
            </div>
        )

    } else if (!state.deleted && state.confirmed) {
        return (
            <>
                <p>Estás seguro que quieres eliminar?</p>
                <button
                    onClick={() => {
                        setState({ ...state, deleted: true, value: '' })
                    }}
                >Si
                </button>
                <button
                    onClick={() => {
                        setState({ ...state, confirmed: false, value: '' })
                    }}
                >No</button>
            </>
        )
    } else {
        return (
            <>
                <p>Eliminado con éxito..</p>
                <button
                    onClick={() => {
                        setState({ ...state,deleted: false, confirmed: false, value: '' })
                    }}
                >Resetear</button>
            </>
        )
    }
}
