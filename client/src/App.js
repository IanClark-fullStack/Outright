import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'; 
import Title from './components/Title';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>ABABAB</code> and save to reload.
        </p>
        <a
          className="App-link"
          // style={{fontWeight: "900"}}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        ABCDEFGHIJKLM
        </a>
        <Home />
      </header>
    </div>
  );
}

export default App;
