import ReactDOM from 'react-dom';
import React from 'react'
import './index.css'


// const el = document.getElementById('root')
// ReactDOM.render('Olá', el  )

const tag = <strong>Olá React!</strong> 

ReactDOM.render(
     <div>
        { tag }
        
        </div> , 
    document.getElementById('root')  )