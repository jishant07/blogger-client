import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Login from './components/login'
import Signup from './components/signup'
import Secret from './components/secret'
import FullBlog from './components/full-blog'
import ErrorPage from './components/error'
import AddBlog from './components/addblog'
import { ProtectedRoute } from './components/protectedRoute';


class App extends React.Component{
  render(){
    return (
        <BrowserRouter>
        <Navbar />
          <div className="container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <ProtectedRoute path="/secret" component={Secret} />
                <ProtectedRoute exact path='/blog/:id' component={FullBlog} />
                <ProtectedRoute exact path='/addblog' component={AddBlog} />
                <Route path='*' component={ErrorPage} />
            </Switch>
          </div>
        </BrowserRouter>
    )
  } 
}
export default App;
