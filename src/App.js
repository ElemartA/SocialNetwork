import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';



const App = (props) => {
  return (
      <div className='appWrapper'>
        <Header />
        <Nav state = {props.state.sidebar} />
        <div className='appWrapperContent'>
          <Route path = '/profile' render = { () => <Profile profilePage = {props.state.profilePage} dispatch = {props.dispatch}  />} />
          <Route path = '/dialogs' render = { () => <Dialogs dialogsPage = {props.state.dialogsPage} dispatch = {props.dispatch} />} />
          <Route path = '/news' render = { () => <News />} />
          <Route path = '/music' render = { () => <Music />} />
          <Route path = '/settings' render = { () => <Settings />} />
          
        </div>
      </div>
  );
}




export default App;
