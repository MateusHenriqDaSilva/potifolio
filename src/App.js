import React  from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Redirect ,Switch } from 'react-router-dom'
import Projetos from './components/Projetos';
import Sobre from './components/Sobre'
import Resumo from './components/Resumo'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container app_container">
          <div className="row app_row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 app__main-content">
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <Sobre />
                </Route>
                <Route path="/resumo">
                  <Resumo />
                </Route>
                <Route path="/projetos" component={Projetos} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
