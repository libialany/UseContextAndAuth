import logo from './logo.svg';
import './App.css';
import { DataProvider } from './context/createContext';
import Greet from './components/Greet';
import ModifyGreet from './components/ModifyGreet';
function App() {
  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greet />
          <ModifyGreet />
        </header>
      </div>
    </DataProvider>
  );
}

export default App;
