import React, {Component} from 'react';
import {isMobile} from 'react-device-detect';

import Main from './pages/main.js';

class Assembly extends Component {
  render() {
    return(
      <div>
        {!isMobile ? (
          <Main/>
        ) : (
          null
        )}
      </div>
    )
  }
}

export default Assembly;