import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Resende">
        <Member name="Leonardo" />
        <Member name="Isabelle" />
        <Member name="Juliana" />

    </Family>,
    document.getElementById('app')
)

