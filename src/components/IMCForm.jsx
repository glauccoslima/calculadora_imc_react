import { useState } from 'react';

function IMCForm() {
  // Definindo o estado inicial para altura, peso, IMC, classificação e erro
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [erro, setErro] = useState('');

  // Função para calcular o IMC
  const calcularIMC = () => {
    // Convertendo altura e peso para float, substituindo vírgula por ponto se necessário
    const alturaCorrigida = parseFloat(altura.replace(',', '.'));
    const pesoCorrigido = parseFloat(peso.replace(',', '.'));

    // Verificando se os valores são válidos
    if (isNaN(alturaCorrigida) || isNaN(pesoCorrigido) || alturaCorrigida <= 0 || pesoCorrigido <= 0) {
      setErro('Por favor, insira valores válidos para altura e peso.');
      return;
    }

    // Convertendo altura para metros se for maior que 3 (assumindo que o usuário pode inserir em metros ou centímetros)
    const alturaMetros = alturaCorrigida <= 3 ? alturaCorrigida : alturaCorrigida / 100;

    // Calculando o IMC
    const imcCalculado = pesoCorrigido / (alturaMetros ** 2);

    // Atualizando o estado com os valores calculados
    setImc(imcCalculado.toFixed(2));
    setClassificacao(getClassificacao(imcCalculado));
    setErro(''); // Limpar qualquer erro anterior
  };

  // Função para determinar a classificação do IMC
  const getClassificacao = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 34.9) return 'Obesidade grau 1';
    if (imc < 39.9) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
  };

  // Renderizando o formulário
  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      {erro && <div className="alert alert-danger">{erro}</div>} {/* Mostrando erro se houver */}
      <div className="mb-3">
        <label className="form-label">Altura</label>
        <input type="text" className="form-control" value={altura} onChange={e => setAltura(e.target.value.replace(/[^0-9.,]/g, ''))} />
      </div>
      <div className="mb-3">
        <label className="form-label">Peso</label>
        <input type="text" className="form-control" value={peso} onChange={e => setPeso(e.target.value.replace(/[^0-9.,]/g, ''))} />
      </div>
      <button className="mb-2 btn btn-primary" onClick={calcularIMC}>Calcular</button>
      {imc && (
        <div>
          <h3>IMC: {imc}</h3>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )} {/* Mostrando o resultado se o IMC for calculado */}
    </div>
  );
}

export default IMCForm;
