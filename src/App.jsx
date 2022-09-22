import { useState } from 'react';
import './App.css';

function App() {
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>Currency Converter</h1>
      </div>
      <div className="fields">
        <div className="field">
          <label htmlFor="exchangeRate">Exachange Rate To Dollars</label>
          <input
            type="number"
            id="exchangeRate"
            value={rate}
            onChange={(e) => setRate(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="field">
          <label htmlFor="amountToConvert">Amount To Convert</label>
          {/* <img src="src/assets/argentina.png" alt="argentina's flag" width={32} /> */}
          <input
            type="number"
            id="amountToConvert"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="field">
          <label htmlFor="totalInUsd">Total in USD</label>
          <input
            type="number"
            id="totalInUsd"
            value={parseFloat(amount / rate).toFixed(2)}
          />
        </div>
        <div className="field">
          <label htmlFor="totalInBob">Total in BOB</label>
          <input
            type="number"
            id="totalInBob"
            value={parseFloat((amount / rate) * 6.97).toFixed(2)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
