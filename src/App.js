import React from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import TopBar from './components/TopBar';
import Editor from './components/Editor';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Container>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Editor} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
