import React from 'react';
import ReactDOM from "react-dom";

import { Button } from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>

      <Button 
        onClick={() => {console.log("button clickity clacked")}} 
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--large"
        >I'm a button ya'll</Button>

      <Button 
        onClick={() => {console.log("button clickity clacked")}} 
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--medium"
        >passing in diff props</Button>

      <Button 
        onClick={() => {console.log("button clickity clacked")}} 
        type="button"
        buttonStyle="btn--warning--outline"
        buttonSize="btn--medium"
        >using css vars</Button>


      <Button 
        onClick={() => {console.log("button clickity clacked")}} 
        type="button"
        buttonStyle="btn--warning--solid"
        buttonSize="btn--large"
        >and react components</Button>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
