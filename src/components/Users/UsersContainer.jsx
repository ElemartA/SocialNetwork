import { connect } from "react-redux";
import { followActionCreator, unfollowActionCreator,setUsersActionCreator } from "../../Redux/usersReducer";
import Users from "./Users";

//с помощью mapStateToPrips в Users в качестве props придет свойство users,
// значением которого будут пользователи из state
const mapStateToProps = (state) => {
    return(
        {users: state.usersPage.users}
    )
}

// mapDispatchToProps  предназначена для передачи в качестве props  в презентационную компоненту
// Users collbackов, которые презентационная компонента будет вызывать
const mapDispatchToProps = (dispatch) => {
    return({
            follow: (userId) => dispatch(followActionCreator(userId)),
            unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
            setUsers: (users) => dispatch(setUsersActionCreator (users))
        })
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;