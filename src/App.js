import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Navs from './components/Navs';
import  Star  from './pages/Star';
import Home  from './pages/Home';
function App() {

  return (
    <div>
      <Navs/>
      <Switch>
    <Route exact={true} path="/">
      <Home/>
    </Route>
    <Route exact path="/Star">
      <Star/>
    </Route>
    <Route>
      Undefined
    </Route>
  </Switch>
  </div>
)
}

export default App;
