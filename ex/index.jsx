import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'
import ClassComponent from './classComponent'
import Field from "./field";

// ReactDOM.render(
//     <ClassComponent initialValue={10} label="Contador" />,
//     document.getElementById('app')
// )

ReactDOM.render(
    <Field initialValue="" />,
    document.getElementById('app')
)

