import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Listagem from './pages/Listagem';
import Detalhes from './pages/Detalhes';


const Routes: React.FC = () => {
  return (
      <Switch>
          <Route path="/" exact component={Listagem}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/detalhes/:id" exact component={Detalhes}/>
          
      </Switch>
  );
}

export default Routes;