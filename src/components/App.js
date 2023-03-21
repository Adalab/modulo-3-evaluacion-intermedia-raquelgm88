import '../styles/App.scss';
//import quotes from '../data/quotes.json';
import callToApi from '../services/api';
import { useState, useEffect } from 'react';

function App() {

  //Variables de estado
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [character, setCharacter] = useState('Todos');
  const [newQuote, setNewQuote] = useState({
    quote: '',
    character: ''
  });
  const [requestMessage, setRequestMessage] = useState('hidden');

  //Funciones
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

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

  const handleNewQuote = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    setNewQuote({...newQuote, [inputName]: inputValue});
    setRequestMessage('hidden');
  };

  const handleCreateQuote = (event) => {
    event.preventDefault();
    if (newQuote.quote === '' || newQuote.character === '') {
      setRequestMessage('');
    }else{
    setData([...data, newQuote]);
    setNewQuote({
      quote: '',
      character: ''
    });
    setRequestMessage('hidden');
  }
  };

  return (
  <div className="App">
    <header>
      <h1>Frases de Friends</h1>
    </header>
    <main>
      <form>
        <label htmlFor="search">Filtar por frase </label>
        <input className="" type="search" name="search"  autoComplete='off' onInput={handleFilter} value={search}  />
        <label htmlFor="character">Filtrar por personaje</label>
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
      <form action="">
        <h2>Añadir una nueva frase</h2>
        <label htmlFor="quote">Frase</label>
        <input required type="text" name="quote"
        id="quote" value={newQuote.quote} onInput={handleNewQuote}/>
        <label htmlFor="character">Personaje</label>
        <input required type="text" name="character" id="character" value={newQuote.character} onInput={handleNewQuote}/>
        <input type="submit" value="Añadir una nueva frase" onClick={handleCreateQuote}/>
        <p className={requestMessage}>*Rellene todos los campos</p>
      </form>
    </main>
  </div>
  );
}

export default App;
