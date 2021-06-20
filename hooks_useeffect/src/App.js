import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [toplam, toplamGuncelle] = useState(0);

  // componentDidUpdate metodu yerine...
  // toplam değeri değiştiğinde çalışır.
  useEffect( () => {
    console.log(`Toplam sayısı: ${toplam}`);
  }, [toplam]);

  // componentDidMount ve componentWillUnmount metodu yerine...
  useEffect( () => {
    console.log("App render edildi");
    return () => {
      console.log("App kaldırılıyor.");
    }
  }, []);

  return (
    <div className="App" >
      <p>Toplam {toplam}</p>
      <button onClick={() => toplamGuncelle(toplam + 1)}>+</button>
      <button onClick={() => toplamGuncelle(toplam - 1)}>-</button>
    </div>
  );
}

export default App;