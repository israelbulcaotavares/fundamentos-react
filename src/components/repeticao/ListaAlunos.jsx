import React from "react";
import alunos from "../../src/data/alunos";

export default props => {
    console.log(alunos)
    const li1 = ( 
    <li> 
        {alunos[0].id})  {alunos[0].nome} -&gt; {alunos[0].nota} 
    </li> 
    );

    const alunosLI = alunos.map(aluno => {
        return <li key={aluno.id} >
            {aluno.id}) {aluno.nome} -&gt; {aluno.nota}
        </li>
    })
    return(
        <div>
            <ul style={{ listStyle: 'none'}}>
                {alunosLI}  
            </ul>
        </div>
    )
}