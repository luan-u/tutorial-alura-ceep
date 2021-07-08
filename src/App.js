import { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component{
  render(){
    // JSX returns must have only one parent tag
    return (
      <section className="conteudo">
        <FormularioCadastro />
  
        <ListaDeNotas />
  
      </section>
  
    );
  }
}

export default App;
