import React from 'react';
import ListaCoches from './Ejercicios/ListaDeCoches';
import Despedida from './Ejercicios/Despedida';
import Saludo from './Ejercicios/Saludo';

function App() {
  const mostrarSaludo = true;
  const nombreUsuario = 'Íñigo';
  return (
    <div className="App">
    {mostrarSaludo ? <Saludo nombre={nombreUsuario} /> : <Despedida nombre={nombreUsuario} />}
    <ListaCoches />
  </div>
  );
}

export default App;