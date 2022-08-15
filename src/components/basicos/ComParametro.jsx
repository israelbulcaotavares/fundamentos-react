export default function ComParametro(props) {
  
  console.log(props)
  const sub = props.subtitulo
  const status = props.nota >= 7 ? 'Aprovado' : "Recuperação"
  const notaInt = Math.ceil(props.nota)

  return ( 
  
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.aluno} tem nota { notaInt}</h3>
            <strong>{status}</strong>
        </div>
         )
    
}
