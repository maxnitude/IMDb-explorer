import './App.scss';
import Search from './components/Search/Search';
import Title from './components/Title/Title';
import FilmPage from './components/FilmPage/FilmPage';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Route exact path='/'>
        <div className="homepage">
          <Title />
          <Search />
        </div>
      </Route>
      <Route path='/filmpage/:id' component={FilmPage}  />
    </div>
  );
}

export default App;
