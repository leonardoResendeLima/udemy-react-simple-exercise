import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { dec, inc, valueChanged } from "./counterActions";

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input value={props.counter.step} onChange={props.valueChanged} type="number" />
        <button onClick={props.inc}>Incrementar</button>
        <button onClick={props.dec}>Decrementar</button>
    </div>
)


const mapStateToProps = state => ({ counter : state.counter})
const mapDispatchToProps = dispatch => bindActionCreators({
    inc, 
    dec,
    valueChanged
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)