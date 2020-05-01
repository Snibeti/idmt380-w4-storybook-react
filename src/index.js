import React from 'react';
import ReactDOM from "react-dom";

import { Button } from './components/Button';
import { Card } from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>


    <Card>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque ligula vitae augue laoreet, et malesuada erat viverra. Nullam eu augue consectetur, fringilla metus vel, lobortis leo.</p>
    </Card>

    <Card>
    <p>Just showing that you can change the values of the text boxes when using this component, I mean Nullam pellentesque ligula vitae augue laoreet, et malesuada erat viverra. Nullam eu augue consectetur...</p>
    </Card>
<br></br>
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
