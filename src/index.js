import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './Redux/reduxStore';
import ReactDOM from 'react-dom';
import { Provider } from './StoreContext';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
                <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)} />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree(store.getState());
store.subscribe(() => {
    rerenderEntireTree(store.getState())
});

