import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import Sidebar from './Sidebar/Sidebar';



const Nav = (props) => {
  return (
    
      <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <NavLink activeClassName={s.activeNavLink} to='/profile'>Profile </NavLink>
        </div>
        <div className={s.item}>
          <NavLink activeClassName={s.activeNavLink} to='/dialogs'>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink activeClassName={s.activeNavLink} to='/news'>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink activeClassName={s.activeNavLink} to='music'>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink activeClassName={s.activeNavLink} to='/settings'>Settings</NavLink>
        </div>
        <div className={s.item}>
          <NavLink activeClassName={s.activeNavLink} to='/users'>Users</NavLink>
        </div>
        <Sidebar state = {props.state.friends} />
      </nav>
      
    
  )
}

export default Nav;