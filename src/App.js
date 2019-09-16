import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Counter from './Counter'



function App() {
  return (
    <div className="card col-md-10 offset-3">
    <h1>Count!!</h1>
    <div className= "btn btn-success">
    <Counter />
     
    </div>
    <div className= "btn btn-primary">
    <Counter />
     
    </div>
    </div>
  );
}


export default App; 