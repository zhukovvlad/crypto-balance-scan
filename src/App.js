import './App.css';
import SearchWallet from './components/SearchWallet';
import ButtonAppBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <SearchWallet />
    </div>
  );
}

export default App;
