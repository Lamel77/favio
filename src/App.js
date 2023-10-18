
import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape';
import Conteudo from './componentes/Conteudo';
import CadastroUsuario from './componentes/CadastroUsuario';
import LoginUsuario from './componentes/LoginUsuario';


function App() {

  Conteudo();
  return (
    /*o react substitui className por class é palavra reservada do JS*/
    <>
 
    <Cabecalho logo="logo192.png" titulo="Gerenciador de favoritos"  subtitulo= "O Melhor gerenciador de favoritos"/> 
   <CadastroUsuario/>
   <LoginUsuario/>
     {/*<Conteudo/> */}
    <Rodape/>
    </>
  );
}

export default App;
