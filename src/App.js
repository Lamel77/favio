
import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape';
import Conteudo, {OlaMundo} from './componentes/Conteudo';


function App() {

  OlaMundo();
  return (
    /*o react substitui className por class é palavra reservada do JS*/
    <>
 
    <Cabecalho logo="logo192.png" titulo="Gerenciador de favoritos"  subtitulo= "O Melhor gerenciador de favoritos da internet Brasileira"/> 
    <Conteudo/> 
    <Rodape/>
    </>
  );
}

export default App;
