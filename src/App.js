import './App.css';
import { CountriesProvider } from './context/CountriesContext';
import Container from './components/Container';

function App() {
  return (
    <CountriesProvider>
      <div className="App">
        <h1>Countries and Capitals</h1>
        <Container/>
      </div>
      
    </CountriesProvider>
  );
}

export default App;
