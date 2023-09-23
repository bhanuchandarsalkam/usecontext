import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cricketprovider from "./components/cricketprovider";


ReactDOM.render(
  <Cricketprovider> <App/></Cricketprovider>
   , document.getElementById("root")
);