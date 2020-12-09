import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    return <div>
        {props.users.map(u =>

            <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt='avatar' className={s.userPhoto} />
                        {u.followed ? <button onClick={() => { props.follow(u.id) }}>Unfollow</button> :
                            <button onClick={() => { props.unfollow(u.id) }}>Follow</button>}
                    </div>
                    <div>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
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

