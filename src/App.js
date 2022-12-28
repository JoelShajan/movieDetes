import React from 'react';
import {Switch,Route} from 'react-router-dom'

function App() {
  return <Switch>
    <Route exact={true} path="/">
      This is the Beginning
    </Route>
    <Route exact path="/starred">
      This is star
    </Route>
    <Route>
      Undefined
    </Route>
  </Switch>
}

export default App;
