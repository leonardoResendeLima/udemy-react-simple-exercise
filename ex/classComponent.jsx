import React, { Component } from 'react'

export default class ClassComponent extends Component {
    // Chama o construtor
    constructor(props) {
        // Invoca o super do Component
        super(props);
        // Seta o estado com o valor da propriedade
        this.state = { value: props.initialValue }
    }

    sum(delta) {
        this.setState({
            value: this.state.value + delta
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h1>{this.state.value}</h1>
                {/* Chamada para a funcao nao deve chamar diretamente o metodo, senao retorna undefined */}
                <button onClick={() => this.sum(-1)}>Decrement</button>
                <button onClick={() => this.sum(1)}>Increment</button>
            </div>
        )
    }

}