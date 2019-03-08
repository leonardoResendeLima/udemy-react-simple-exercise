import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import Family from './family'
import Member from './member'
import ClassComponent from './classComponent'
import Field from "./field";

// ReactDOM.render(
//     <ClassComponent initialValue={10} label="Contador" />,
//     document.getElementById('app')
// )

const reducers = combineReducers({
    field: () => ({ value: "Opa" })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue="" />
    </Provider>,
    document.getElementById('app')
)

