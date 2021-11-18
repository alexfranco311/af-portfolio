import './App.css';
import warning from './images/warning-sign-39220.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, my name is Alex.</h1>
        <img src={warning} className="App-logo" alt="logo" width="300px" height="300px"/>
        <p>
          Currently creating portfolio using React
        </p>
      </header>
    </div>
  );
}

export default App;
