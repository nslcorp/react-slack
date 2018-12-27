import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/Auth/Register';
import Auth from './components/Auth/Auth';


const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/register" component={Register} />
      <Route path="/auth" component={Auth} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
