import { useState } from 'react';

function IMCForm() {
  // Definindo o estado inicial para altura, peso, IMC, classificação e erro
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [error, setError] = useState('');

  // Função para calcular o IMC
  const calculateIMC = () => {
    // Convertendo altura e peso para float, substituindo vírgula por ponto se necessário
    const alturaNumber = parseFloat(altura.replace(',', '.'));
    const pesoNumber = parseFloat(peso.replace(',', '.'));

    // Verificando se os valores são válidos
    if (isNaN(alturaNumber) || isNaN(pesoNumber) || alturaNumber <= 0 || pesoNumber <= 0) {
      setError('Please enter valid values for height and weight.');
      return;
    }

    // Convertendo altura para metros se for maior que 3 (assumindo que o usuário pode inserir em metros ou centímetros)
    const alturaInMeters = alturaNumber <= 3 ? alturaNumber : alturaNumber / 100;

    // Calculando o IMC
    const imcValue = pesoNumber / (alturaInMeters * alturaInMeters);

    // Atualizando o estado com os valores calculados
    setImc(imcValue.toFixed(2));
    setClassificacao(getClassification(imcValue));
    setError(''); // Limpar qualquer erro anterior
  };

  // Função para determinar a classificação do IMC
  const getClassification = (imc) => {
    if (imc < 18.5) return 'Underweight';
    if (imc < 24.9) return 'Normal weight';
    if (imc < 29.9) return 'Overweight';
    if (imc < 34.9) return 'Obesity Class I';
    if (imc < 39.9) return 'Obesity Class II';
    return 'Obesity Class III';
  };

  // Renderizando o formulário
  return (
    <div className="container">
      <h1>IMC Calculator</h1>
      {error && <div className="alert alert-danger">{error}</div>} {/* Mostrando erro se houver */}
      <div className="mb-3">
        <label className="form-label">Height</label>
        <input type="text" className="form-control" value={altura} onChange={(e) => setAltura(e.target.value.replace(/[^0-9.,]/g, ''))} />
      </div>
      <div className="mb-3">
        <label className="form-label">Weight</label>
        <input type="text" className="form-control" value={peso} onChange={(e) => setPeso(e.target.value.replace(/[^0-9.,]/g, ''))} />
      </div>
      <button className="mb-2 btn btn-primary" onClick={calculateIMC}>Calculate</button>
      {imc && (
        <div>
          <h3>IMC: {imc}</h3>
          <h3>Classification: {classificacao}</h3>
        </div>
      )} {/* Mostrando o resultado se o IMC for calculado */}
    </div>
  );
}

export default IMCForm;
