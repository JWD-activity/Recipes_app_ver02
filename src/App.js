import './App.css';
import Header from './UI/Header';

function App() {
  return (
    <div className='app container'>
      <Header />
      <div className='row'>
        <div className='search-results col'>Search</div>
        <div className='recipe col'>Recipe</div>
      </div>
    </div>
  );
}

export default App;
