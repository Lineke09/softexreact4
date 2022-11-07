import SayMyName from "./components/SatMyName";
import Pessoa from "./components/Pessoa";
import Botao from "./components/Botao";

function App() {
  var valorinicial = 1

  const nome = "João"
  return (
    <div className="App">
    <h1>Matheus Lineke da Cruz Figueredo</h1>
    <SayMyName nome="Lineke"/>
    <SayMyName nome="Carlos"/>
    <SayMyName nome={nome}/>
    <Pessoa nome="Rodrigo" 
    idade="87"
    profissão= "Dev"
        ></Pessoa>
    <Botao número = {valorinicial + 1} />
    </div>
  );
}

export default App;
