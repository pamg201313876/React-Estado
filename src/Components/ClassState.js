import React from 'react'

class ClassState extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: false,
            loading: false
        }
    }


    componentDidUpdate() {
        if (this.state.loading) {
            setTimeout(() => {
                this.setState({ loading: false })
            }, 2000)
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.nombre}</h2>
                <p>Por favor, escribe el código de seguridad</p>
                {this.state.error && (
                    <p>El código es incorrecto</p>
                )}
                {this.state.loading && (
                    <p>Cargando...</p>
                )}
                <input placeholder='Codigo de seguridad' />
                <button
                    onClick={() => this.setState({ loading: true })}
                >Comparar</button>
            </div>
        )
    }

}

export { ClassState }