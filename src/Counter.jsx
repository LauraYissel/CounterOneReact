import React from 'react' ;
import PropTypes from 'prop-types';

class Counter extends React.Component{ 
  constructor(props){ 
    super(props) 
     this.state = { count: 0} ;
    } 
	increment (){
        this.setState({count:this.state.count + 1 });
    }
  render(){ 
    return ( 
        
      <div onClick={()=>this.increment()}>{this.state.count}</div>
      

    ) 
  } 
};



export default Counter;
