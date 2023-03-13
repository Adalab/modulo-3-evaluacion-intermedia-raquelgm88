import '../styles/App.scss';
import quotes from '../data/quotes.json';

function App() {

  

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
