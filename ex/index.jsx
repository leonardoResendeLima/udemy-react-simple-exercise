import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'
import ClassComponent from './classComponent'

ReactDOM.render(
    <ClassComponent initialValue={10} label="Contador" />,
    document.getElementById('app')
)

