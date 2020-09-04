import React, {Component} from 'react';
import {Textfit} from 'react-textfit';

import './main.css';

import * as temp from '../assets/images/temp.jpg';

export class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      filter: true
    }
  }

  render() {
    return(
      <div>
        <div className='contentWrapper outline' onMouseEnter={() => this.setState({filter: false})} onMouseLeave={() => this.setState({filter: true})}>
          {this.state.filter ? (<div className='contentWrapper filter'/>):(null)}
          <img src={temp} alt='Temporary Image'/>
          <div className='headerWrapper'>
            <Textfit mode='single'>
              <h1>VANSTRINGS</h1>
            </Textfit>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
