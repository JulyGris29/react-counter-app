import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
//import { CounterApp2 } from './CounterApp2';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';


ReactDOM.createRoot(document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 10 }/>
        {/* <FirstApp title = "Hola soy Vegueta"/> */}
    </React.StrictMode>
);

