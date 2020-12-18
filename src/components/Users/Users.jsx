import { NavLink } from 'react-router-dom';
import photoAva from '../../assets/images/photoBoy.png';
import s from './Users.module.css';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount /props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    return <div>
    <div>
        {pages.map (p => {
            return <button className = {props.currentPage === p && s.selectedPage} 
            onClick = {(e) => {props.onPageChange(p)}}>   
         {p} 
        </button>  
        })}  
    </div> 
    {props.users.map(u => 
     
        <div key={u.id}>
            <span>
                <div>
                    <NavLink to = {'/profile/' + u.id} >
                    < img src={u.photos.small != null ? u.photos.small : photoAva} alt='avatar' 
                    className={s.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id) }}>Follow</button>}
                </div>
                <div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <span>
                        <div>
                            'u.location.country'
                </div>
                        <div>
                            'u.location.city'
                </div>
                    </span>
                </div>
            </span>
        </div>
    )
    }
</div>
}

export default Users;