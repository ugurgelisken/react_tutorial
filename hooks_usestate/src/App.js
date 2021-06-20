import './App.css';

import React, { useState } from 'react';

function App() {
  const [toplam, toplamGuncelle] = useState(0);
  return (
    <div className="App" >
      <p>Toplam {toplam}</p>
      <button onClick={ () => toplamGuncelle(toplam + 1) }>+</button>
      <button onClick={ () => toplamGuncelle(toplam - 1) }>-</button>
    </div>
  );
}

export default App;
