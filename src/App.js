import './App.css';
import Logo from './components/Logo';
import Button from './components/Button';

function App() {
  return (
    <div className='app container'>
      <header className='row py-3'>
        <div className='col-sm-10 col-md-3'>
          <Logo />
        </div>
        <div className='col-sm-10 col-md-4'>search</div>
        <div className='col-sm-10 col-md-4'>
          <Button icon='fas fa-plus-square'>Add recipe</Button>
          <Button icon='fas fa-bookmark'>Bookmark</Button>
        </div>
      </header>
      <div className='row'>
        <div className='search-results col'>Search</div>
        <div className='recipe col'>Recipe</div>
      </div>
    </div>
  );
}

export default App;
