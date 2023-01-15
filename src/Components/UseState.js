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


    const onConfirm = () => {
        setState({ ...state, loading: false, error: false, confirmed: true })
    }

    const onError = () => {
        setState({ ...state, loading: false, error: true, })
    }

    const onWrite = (cadena) => {
        setState({ ...state, value: cadena })
    }

    const onCheck = () => {
        setState({ ...state, loading: true, error: false })
    }
    
    const onDelete = () => {
        setState({ ...state, deleted: true, value: '' })
    }   
    

    const onReset = () => {
        setState({ ...state,deleted: false, confirmed: false, value: '' })
    }

    

    React.useEffect(() => {
        if (state.loading) {

            setTimeout(() => {
                if (state.value === SECURITY_CODE) {
                    onConfirm();
                } else {
                   onError();
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
                    onChange={(event) => onWrite(event.target.value)}
                />
                <button
                    onClick={onCheck}
                >Comparar</button>
            </div>
        )

    } else if (!state.deleted && state.confirmed) {
        return (
            <>
                <p>Estás seguro que quieres eliminar?</p>
                <button
                    onClick={onDelete}
                >Si
                </button>
                <button
                    onClick={onReset}
                >No</button>
            </>
        )
    } else {
        return (
            <>
                <p>Eliminado con éxito..</p>
                <button
                    onClick={onReset}
                >Resetear</button>
            </>
        )
    }
}
