import './App.css';
import Square from './Square.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          WORDLE
        </p>
      </header>
      <p>
        <div className='board'>
          <div id="row"  className='row' > 
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
          <div id="row" className='row'  > 
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
          <div id="row" className='row'  > 
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
          <div id="row" className='row'  > 
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
          <div id="row" className='row'  > 
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
          </div>
      </p>

    </div>
  );
}

export default App;
