import { Component } from "react";

import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";

import "./assets/App.css";
import './assets/index.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      notas: [],
      categorias: []
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayDeNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayDeNotas
    }
    this.setState(novoEstado);
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas:arrayNotas});
  }

  render(){
    // JSX returns must have only one parent tag
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias />
          
          <ListaDeNotas
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}/>
        </main>
  
        
  
      </section>
  
    );
  }
}

export default App;
