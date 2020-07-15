import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import store from './redux/redux-store';
import SamuraiJSApp from './App';


ReactDOM.render(<SamuraiJSApp />,document.getElementById('root'))

    // <BrowserRouter>
    //     <React.StrictMode>
    //         <Provider store={store}>
    //             <App/>
    //         </Provider>
    //     </React.StrictMode>
    // </BrowserRouter>,
    // document.getElementById('root'));

serviceWorker.unregister();
