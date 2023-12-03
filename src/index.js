import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './components/redux/store'
import App from './App';
import ReactDOM from 'react-dom';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
     <Provider store={store}>
            <App/>
        </Provider>
  </StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

