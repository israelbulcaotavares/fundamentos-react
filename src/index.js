import ReactDOM from 'react-dom';
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro';


// const el = document.getElementById('root')
// ReactDOM.render('Olá', el  )

const tag = <strong>Olá React!</strong>

ReactDOM.render(
    <div>
        <Primeiro />  
    </div>,
    document.getElementById('root'))