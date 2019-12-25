
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import './main.css';

// Importing Redux Provider component and the createStore function.
import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
document.getElementById('root'));


