import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import './css/layout/blog.css';
import './css/layout/pure-min.css';
import './css/layout/grids-responsive-min.css';
import { createStore} from 'redux';
import reducers from './reducers'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__() 
)

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
 