import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { LoginContextProvider } from './store/token-context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginContextProvider>
    <App />
    </LoginContextProvider>

);

