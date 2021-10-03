import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import pages
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Login from './components/Login/Login';
import Post from './pages/Post/Post';
import PageNotFound from './pages/404/404';
import UploadPage from './pages/Upload/Upload-Page';
import Category from './pages/Category/Category';


import { history } from './helpers/History';
import { PrivateRoute } from './components/Private-Route/Private-Route';

function App(props) {
  return (
    <Router history={history} basename="/">
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} /> */}

        <Route exact path="/" component={Home} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/posts/:id/:title" component={Post} />
        <Route path="/upload" component={UploadPage} />
        <Route path="/category/:id" component={Category} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
