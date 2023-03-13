import '../styles/App.scss';
import quotes from '../data/quotes.json';
import { useState } from 'react';

function App() {

  //Variables de estado
  const [data, setData] = useState(quotes);
  const [search, setSearch] = useState('');
  
  //Funciones
  const renderList = () => {
    return data.filter((eachQuote) => {
      return eachQuote.quote.toLowerCase().includes(search.toLowerCase());
    }).map ((eachQuote, index) => {
     return <li key={index} className="quote__item">{eachQuote.quote} - {eachQuote.character}</li>
    })
  }

  const handleFilter = (event) => {
    setSearch(event.target.value);
  }

  return (
  <div className="App">
    <header>
      <h1>Frases de Friends</h1>
    </header>
    <main>
      <form>
        <label htmlFor="search">Filtar por frase </label>
        <input className="" type="search" name="search"  autoComplete='off' onInput={handleFilter} value={search}  />
        <label htmlFor="">Filtrar por personaje</label>
        <select name="character" id="character">
          <option value="todos">Todos</option>
        </select>
      </form>
      <ul>
        {renderList()}
      </ul>
    </main>
  </div>
  );
}

export default App;
