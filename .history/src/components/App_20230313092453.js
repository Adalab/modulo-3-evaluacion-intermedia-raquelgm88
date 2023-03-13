import '../styles/App.scss';
import quotes from '../data/quotes.json';
import { useState } from 'react';

function App() {

  //Variables de estado
  const [data, setData] = useState(quotes);
  const [search, setSearch] = useState('');
  
  //Funciones
  const renderList = () => {
    data.map ((eachQuote, index) => {
     return <li key={index} className="quote__item">{eachQuote.quote} - {eachQuote.character}</li>
    })
  }

  return (
  <div className="App">
    <header>
      <h1>Frases de Friends</h1>
    </header>
    <main>
      <form>
        <label htmlFor="search">Filtar por frase </label>
        <input className="" type="search" name="search"  autoComplete='off' value={}  />
      </form>
      <ul>
        <li>Pivot! Pivot! Pivot! Pivot! Pivot! - Ross</li>
      </ul>
    </main>
  </div>
  );
}

export default App;
