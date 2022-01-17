import './App.css';
import './components/PersonCard'
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName="Read" firstName="Arthur" age="10" hairColor="brown"></PersonCard>
      <PersonCard lastName="Read" firstName="DW" age="6" hairColor="brown"></PersonCard>
      <PersonCard lastName="Baxter" firstName="Buster" age="10" hairColor="white"></PersonCard>
      <PersonCard lastName="Barnes" firstName="Binky" age="10" hairColor="brown"></PersonCard>
    </div>
  );
}

export default App;
