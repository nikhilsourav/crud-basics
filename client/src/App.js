import Form from './components/Form';
import Greetings from './components/Greetings';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Greetings />
        </Route>
        <Route path='/form' exact>
          <Form />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
