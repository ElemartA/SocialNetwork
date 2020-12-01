import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './Redux/state';
import ReactDOM from 'react-dom';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state ={store.getState()} dispatch = {store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root')); 
}


rerenderEntireTree(store.getState());
store.subscribe (rerenderEntireTree);

