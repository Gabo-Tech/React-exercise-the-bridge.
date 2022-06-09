import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {

  const persons = ["Charles","Christian","Chuck"];
  const person = persons.map(person => <li>{person}</li>)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {person}
        </ul>
        <Person name={'Charles'}/>
        <Person name={'Christian'}/>
        <Person name={'Chuck'}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
