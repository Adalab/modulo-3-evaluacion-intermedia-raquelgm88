import '../styles/App.scss';
import quotes from '../data/quotes.json';
import { useState } from 'react';

function App() {

  //Variables de estado
  const [data, setData] = useState(quotes);
  const [search, setSearch] = useState('');
  const [character, setCharacter] = useState('Todos');

  //Funciones
  const renderList = () => {
    return data.filter((eachQuote) => {
      return eachQuote.quote.toLowerCase().includes(search.toLowerCase());
    }).filter((eachQuote) => {
      if (character.toLowerCase() === "todos") {
        return true;
      } else {
        return eachQuote.character.toLowerCase().includes(character.toLowerCase());
      }
    }).map ((eachQuote, index) => {
     return <li key={index} className="quote__item">{eachQuote.quote} - {eachQuote.character}</li>
    })
  }

  const handleFilter = (event) => {
    setSearch(event.target.value);
  }

  const handleCharacter = (event) => {
    setCharacter(event.target.value);
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
        <select name="character" id="character" onChange={handleCharacter}>
          <option value="todos">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>

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
