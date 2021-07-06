import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

class App extends Component{
  render(){
    // JSX returns must have only one parent tag
    return (
      <section>
        <FormularioCadastro />
  
        <ListaDeNotas />
  
      </section>
  
    );
  }
}

export default App;
