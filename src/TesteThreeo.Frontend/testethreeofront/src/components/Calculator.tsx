import { useState } from 'react';
import { calculate } from '../api/calculate'; // Importando a função de cálculo

const Calculator = () => {
  console.log("Calculator component mounted");  // Verifique se isso aparece no console

  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [operation, setOperation] = useState<string>('multiply');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculation = async () => {
    try {
      const result = await calculate(value1, value2, operation);
      console.log("Calculation result:", result);  // Log do resultado do cálculo
      setResult(result); // Exibe o resultado
    } catch (error) {
      console.error('Error calculating:', error);  // Log de erro
      alert('Calculation failed');
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input
        type="number"
        value={value1}
        onChange={(e) => setValue1(Number(e.target.value))}
        placeholder="Value 1"
      />
      <input
        type="number"
        value={value2}
        onChange={(e) => setValue2(Number(e.target.value))}
        placeholder="Value 2"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="multiply">Multiply</option>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="divide">Divide</option>
      </select>
      <button onClick={handleCalculation}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default Calculator;
