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
    })


    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {

                console.log(state)

                if(state.value === SECURITY_CODE){
                    setState({...state,loading:false, error: false})                    
                }else{
                    setState({...state,loading:false, error: true})   
                }                
            }, 2000)
        }
    }, [state.loading])


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
                    console.log(event.target.value)
                    setState({value:event.target.value})  
                }}
            />
            <button
                onClick={() => {setState({...state,loading:true, error: false})  }}
            >Comparar</button>
        </div>
    )
}
