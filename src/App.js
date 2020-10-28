import React from 'react'
import Landing from './pages/Landing'
import Article from './pages/Article'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/article/:id" component={Article} />
      </Switch>
    </Router>
  );
}

export default App;
