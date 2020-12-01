import s from './Sidebar.module.css';
import SidebarItem from './SidebarItem';

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <div className={s.friendsSidebar}>
                Friends
            </div>
            {props.state.map(friend => <SidebarItem name={friend.name} />)}
            
        </div>
    )
}


export default Sidebar;