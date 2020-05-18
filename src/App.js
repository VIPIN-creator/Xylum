import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {configureStore} from "./redux/ConfigureStore";

const store = configureStore();

function App() {
  return (
    <Provider store = {store}>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
