import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import './css/layout/blog.css';
import './css/layout/pure-min.css';
import './css/layout/grids-responsive-min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
