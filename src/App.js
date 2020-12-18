import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {
  return (
      <div className='appWrapper'>
        <Header />
        <Nav state = {props.state.sidebar} />
        <div className='appWrapperContent'>
          <Route path = '/profile/:userId?' render = { () => <ProfileContainer   />} />
          <Route path = '/dialogs' render = { () => <DialogsContainer  />} />
          <Route path = '/users' render = { () => <UsersContainer  />} />
          <Route path = '/news' render = { () => <News />} />
          <Route path = '/music' render = { () => <Music />} />
          <Route path = '/settings' render = { () => <Settings />} />
          
        </div>
      </div>
  );
}




export default App;
