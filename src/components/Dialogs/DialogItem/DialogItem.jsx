
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className = {s.imgAvatar} src = 'https://pngimg.com/uploads/github/github_PNG80.png'/>
            <NavLink activeClassName = {s.activeNavlink} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;