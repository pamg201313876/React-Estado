import React from 'react'

const SECURITY_CODE = 'paradigma';


export const UseReducer = ({ nombre }) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {

        if (state.loading) {

            setTimeout(() => {
                if (state.value === SECURITY_CODE) {
                    dispatch({ type: actionTypes.CONFIRM })
                } else {
                    dispatch({ type: actionTypes.ERROR })
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
                    onChange={(event) => { dispatch({ type: actionTypes.WRITE, payload: event.target.value }) }}
                />
                <button
                    onClick={() => { dispatch({ type: actionTypes.CHECK }) }}
                >Comparar</button>
            </div>
        )

    } else if (!state.deleted && state.confirmed) {
        return (
            <>
                <p>Estás seguro que quieres eliminar?</p>
                <button
                    onClick={() => { dispatch({ type: actionTypes.DELETE }) }}
                >Si
                </button>
                <button
                    onClick={() => { dispatch({ type: actionTypes.RESET }) }}
                >No</button>
            </>
        )
    } else {
        return (
            <>
                <p>Eliminado con éxito..</p>
                <button
                    onClick={() => { dispatch({ type: actionTypes.RESET }) }}
                >Resetear</button>
            </>
        )
    }
}


const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};

const actionTypes = {
    CONFIRM: 'CONFIRM',
    ERROR: 'ERROR',
    WRITE: 'WRITE',
    CHECK: 'CHECK',
    DELETE: 'DELETE',
    RESET: 'RESET'
}


const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case actionTypes.CONFIRM:
            return { ...state, loading: false, error: false, confirmed: true }

        case actionTypes.ERROR:
            return { ...state, loading: false, error: true, };

        case actionTypes.WRITE:
            return { ...state, value: payload }

        case actionTypes.CHECK:
            return { ...state, loading: true, error: false }

        case actionTypes.DELETE:
            return { ...state, deleted: true, value: '' }

        case actionTypes.RESET:
            return { ...state, deleted: false, confirmed: false, value: '' }

        default:
            return state
    }
}