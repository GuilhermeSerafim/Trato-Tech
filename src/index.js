import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from 'routes';
import store from "./store"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provider está passando todos os states para os componentes que estão intrínseco */}
      <Router /> {/* Todos os componentes que estiverem no router, podem puxar algum reducer do store através do useSelector(state => state.reducerDesejado) */}
    </Provider>
  </React.StrictMode>
);