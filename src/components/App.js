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
     return <li key={index} className="main__ul_quote">{eachQuote.quote} - {eachQuote.character}</li>
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
      setRequestMessage('visible');
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
    <header className='header'>
      <h1 className='header__title'>Frases de Friends</h1>
    </header>
    <main className='main'>
      <form className='main__form'>
        <label className='main__form_label' htmlFor="search">Filtrar por frase </label>
        <input className="main__form_input" type="search" name="search"  autoComplete='off' onInput={handleFilter} value={search}  />
        <label className='main__form_label' htmlFor="character">Filtrar por personaje</label>
        <select className='main__form_select' name="character" id="character" onChange={handleCharacter}>
          <option className='main__form_select-option' value="todos">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>

        </select>
      </form>
      <ul className='main__ul'>
        {renderList()}
      </ul>
      <form className='main__form2' action="">
        <h2 className='main__form2_title'>Añadir una nueva frase</h2>
        <label className='main__form2_label' htmlFor="quote">Frase</label>
        <input className='main__form2_quote' required type="text" name="quote"
        id="quote" value={newQuote.quote} onInput={handleNewQuote}/>
        <label className='main__form2_label' htmlFor="character">Personaje</label>
        <input className='main__form2_character' required type="text" name="character" id="character" value={newQuote.character} onInput={handleNewQuote}/>
        <input className='main__form2_submit' type="submit" value="Añadir una nueva frase" onClick={handleCreateQuote}/>
        <p className={requestMessage}>*Rellene todos los campos</p>
      </form>
    </main>
  </div>
  );
}

export default App;
