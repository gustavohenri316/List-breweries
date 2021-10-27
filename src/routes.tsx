import React from 'react';
import { Switch, Route} from 'react-router-dom'


import Listagem from './pages/Listagem';
import Detalhes from './pages/Detalhes';
import Busca from './components/Busca/busca';


const Routes: React.FC = () => {
  return (
      <Switch>
          <Route path="/" exact component={Listagem}/>
          <Route path="/search" exact component={Busca}/>
          <Route path="/detalhes/:id" exact component={Detalhes}/>
          
      </Switch>
  );
}

export default Routes;