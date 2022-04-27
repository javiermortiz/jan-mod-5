import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store';
import './index.css';
//!!START SILENT
import * as articleActions from './store/articleReducer';
//!!END
//!!ADD
// import { loadArticles } from './store/articleReducer';
//!!END_ADD

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  //!!START SILENT
  window.articleActions = articleActions;
  //!!END
  //!!ADD
  // window.loadArticles = loadArticles;
  //!!END_ADD
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
