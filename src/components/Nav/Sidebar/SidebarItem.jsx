import s from './../Sidebar/Sidebar.module.css';

const SidebarItem = (props) => {
    return (
        <div className = {s.sidebar}>
           
                <div className={s.friendsItem1}>
                    <img className = {s.miniAvatar} src='https://pngimg.com/uploads/github/github_PNG80.png' />
                    <div className = {s.friendsName}>{props.name}</div>
                </div>            
        </div>     
        
    )
}


export default SidebarItem;