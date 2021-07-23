import { Component } from "react";

import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";

import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

import "./assets/App.css";
import './assets/index.css';

class App extends Component{

    constructor(){
        super();
        this.categorias = new Categorias();
        this.notas = new ArrayDeNotas();
    }

    render(){
        // JSX returns must have only one parent tag
        return (
        <section className="conteudo">
            <FormularioCadastro
            categorias={this.categorias}
            criarNota={this.notas.adicionarNota.bind(this.notas)}/>
            <main className="conteudo-principal">
            <ListaDeCategorias
                adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
                categorias={this.categorias} />
            
            <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}/>
            </main>
    
        </section>
    
        );
    }
}

export default App;
