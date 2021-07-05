import { ListaDeNotas } from "./components/ListaDeNotas";

function App() {
// JSX returns must have only one parent tag
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar nota</button>
      </form>

      <ListaDeNotas />

    </section>

  );
}

export default App;
