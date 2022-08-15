import ReactDOM from 'react-dom';
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
 

// const el = document.getElementById('root')
// ReactDOM.render('Olá', el  )

const tag = <strong>Olá React!</strong>

ReactDOM.render(
    <div id='app'>
        <Primeiro/>
        <ComParametro 
                titulo="Situação do aluno" 
                subtitulo="Muito legal!"
                aluno="Pedro"
                nota={9.3}    
                />
        <ComParametro 
                titulo="Situação do aluno" 
                subtitulo="Muito legal!"
                aluno="Maria"
                nota={9.9}    
                />
         <Fragmento/>       
    </div>,
    document.getElementById('root'))