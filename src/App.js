import './App.css';
import Header from './UI/Header';
import FormModal from './components/FormModal';

function App() {
  return (
    <div className='app container'>
      <Header />
      <main className='row'>
        <div className='search-results col'>Search</div>
        <div className='recipe col'>Recipe</div>
      </main>
    </div>
  );
}

export default App;
