import Home from './components/Home';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateTask from './components/CreateTask';
import TaskDetails from './components/TaskDetails';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
      <div className="content">
       <Switch>  {/** Switch component make sure only one route visible at any one time */}
         <Route exact path='/'>
            <Home />
         </Route>
         <Route path='/create'>
            <CreateTask />
         </Route>
         <Route path='/tasks/:id'>
            <TaskDetails />
         </Route>
         <Route path='*'>
            <NotFoundPage />
         </Route>
       </Switch>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
