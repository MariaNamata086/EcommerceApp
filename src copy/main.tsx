import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { myStore } from './store/store';
import App from './App'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store = {myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>   
  </React.StrictMode>,
)
