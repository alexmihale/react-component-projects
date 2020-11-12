import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { jobs, active } from './data';

ReactDOM.render(
  <React.StrictMode>
    <App jobs={jobs} active={active} />
  </React.StrictMode>,
  document.getElementById('root')
);
