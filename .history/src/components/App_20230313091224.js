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
        <input type="search" name="search"  autoComplete='off'  />
      </form>
      <ul>
        <li>Pivot! Pivot! Pivot! Pivot! Pivot! - Ross</li>
      </ul>
    </main>
  </div>
  );
}

export default App;
