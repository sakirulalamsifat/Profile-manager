import logo from './logo.svg'
import './App.css'
import LoginWithHooks from './components/LoginWithHooks'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Navbar from './components/layout/Navbar'
import NotFound from './components/pages/NotFound'
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser'
import User from './components/users/User'

function App() {
  return (
    <div >
      <BrowserRouter>
        
        <Switch>
          <Route path='/' component={LoginWithHooks} exact />
          <Route exact path='/home' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/users/add' component={AddUser} />
          <Route exact path='/users/edit/:id' component={EditUser} />
          <Route exact path='/users/:id' component={User} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
