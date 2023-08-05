// Importando o componente IMCForm
import IMCForm from './components/IMCForm';

// Definindo o componente App
function App() {
  // Renderizando o componente IMCForm dentro de uma div com a classe "App"
  return (
    <div className="App">
      <IMCForm /> {/* Inserindo o componente IMCForm */}
    </div>
  );
}

// Exportando o componente App para ser usado em outras partes do projeto
export default App;
