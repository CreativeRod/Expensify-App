import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dash board component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit expense page
  </div>
);

const HelpPage = () => (
  <div>
    This is from my help page
  </div>
);

// exact={true} is needed to make sure the page does not include the / page with all other routing, only add it to the first one.
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ ExpenseDashboardPage } exact={true}/>
      <Route path="/create" component={ AddExpensePage } />
      <Route path="/edit" component={ EditExpensePage } />
      <Route path="/help" component={ HelpPage } />
    </div>
  </BrowserRouter>
);




ReactDOM.render(routes, document.getElementById('app'));

// When you create 2 tags open/close and add the content inbetween you have to use the {props.children} option to access and render to screen
