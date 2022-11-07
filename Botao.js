import {useState} from 'react'

function Botao({número})  {
    var valorinicial = 1
    function somadorBotao() {
        console.log(`seu número  agora é ${número}`)
       

    }
     const [num, setNumber] = useState(valorinicial)
     return(
        <div>
        <p> Seu número inicial é: 1</p>
        <p>Clique para somar um valor:</p>
        <button onClick={somadorBotao}>
            Somar ao numero
        </button>
        <input 
        value={num}
        onChange={(e) => setNumber(e.target.value)}/>
        <p> Seu valor atual é : {número} </p>
        </div>

     )
}

export default Botao