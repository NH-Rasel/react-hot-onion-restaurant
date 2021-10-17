import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Dinner from './Pages/Home/Items/Dinner/Dinner';
import Lunch from './Pages/Home/Items/Lunch/Lunch';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
