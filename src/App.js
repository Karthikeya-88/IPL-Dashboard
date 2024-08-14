import {Switch, Route} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <NotFound />
    </Switch>
  </>
)

export default App
