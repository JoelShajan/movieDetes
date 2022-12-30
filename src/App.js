import React from 'react';
import {Switch,Route} from 'react-router-dom';
//import Navs from './components/Navs';
import  Star  from './pages/Star';
import Home  from './pages/Home';
import Show from './pages/Show';
function App() {

  return (
    <div>
      <Switch>
    <Route exact={true} path="/">
      <Home/>
    </Route>
    <Route exact path="/Star">
      <Star/>
    </Route>
    <Route exact path="/show/:id">
         <Show/>
    </Route>
    <Route>
      Undefined
    </Route>
  </Switch>
  </div>
)
}

export default App;
