import React, { Component } from "react";

class ListaDeCategorias extends Component {
    state = { }
    render(){
        return(<section>
            <ul>
                <li>Categorias</li>
                <li>Categorias 2</li>
                <li>Categorias 3</li>
                <li>Categorias 4</li>
            </ul>
            <input type="text" />
        </section>
        );
    }
}

export default ListaDeCategorias;