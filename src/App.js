import { useState } from 'react';
import './App.css';
import './assets/fonts.css'
import {withRouter,Route,HashRouter} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Login from './containers/Login/Login'
import Dashboard from './containers/Dashboard/Dashboard';

function App(props) {
  useState(()=>{
    if(localStorage.getItem('token')){
      props.history.push('/dashboard')
    }
    else{
      props.history.push('/')
    }

  },[props.location])
  return (
    <div className="App">
      <Layout>
        <HashRouter>
          {localStorage.getItem('token')?<Route path="/dashboard" exact component={Dashboard}></Route>:
          <Route path="/" exact component={Login}></Route>}
        </HashRouter>
      </Layout>
    </div>
  );
}

export default withRouter(App);
