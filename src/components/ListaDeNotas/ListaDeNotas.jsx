import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component{
    render(){
        // if nothing is done on constructor besides calling super(props) then it can be omitted
        return(
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return(
                        <li className="lista-notas_item" key={index}>
                            <CardNota titulo={nota.titulo} texto={nota.texto} />
                        </li>
                            
                    );
                }) }
            </ul>
        );
    }
}

export default ListaDeNotas;