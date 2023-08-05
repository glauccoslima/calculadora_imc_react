// Importando os estilos do Bootstrap para serem usados globalmente no projeto
import 'bootstrap/dist/css/bootstrap.min.css';

// Importando o React e o ReactDOM para renderizar o componente
import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrigindo a importação aqui

// Importando o componente App, que é o componente raiz do projeto
import App from './App.jsx';

// Utilizando o método createRoot para criar uma raiz de renderização no elemento com id 'root'
// e renderizando o componente App dentro de um modo estrito do React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Inserindo o componente App */}
  </React.StrictMode>,
);
