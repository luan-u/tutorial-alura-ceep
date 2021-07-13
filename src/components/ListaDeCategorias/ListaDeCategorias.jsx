import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
    state = { }
    render(){
        return(
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">Categorias</li>
                    <li className="lista-categorias_item">Categorias 2</li>
                    <li className="lista-categorias_item">Categorias 3</li>
                    <li className="lista-categorias_item">Categorias 4</li>
                </ul>
                <input type="text" className="lista-categorias_input" />
            </section>
        );
    }
}

export default ListaDeCategorias;