import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import petStore from "./store/reducers/petStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={petStore}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);