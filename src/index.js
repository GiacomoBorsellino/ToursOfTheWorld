import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Style from './Style.module.css'

ReactDOM.render(
  <div className={Style['container']}>
    <App />
  </div>,
  document.getElementById('root')
);

