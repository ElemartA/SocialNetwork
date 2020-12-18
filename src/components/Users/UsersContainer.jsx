import { connect } from 'react-redux';
import {follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
    } from '../../Redux/usersReducer';
import axios from 'axios';
import Users from './Users';
import React from 'react';
import s from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';



class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.setIsFetching(true);
         axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setIsFetching(false);
             this.props.setUsers(response.data.items);
             this.props.setTotalUsersCount(response.data.totalCount);
         })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            });
        }

    render() { 
        return <>
            {this.props.isFetching ? <Preloader /> : null } 
            <Users currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

//с помощью mapStateToPrips в Users в качестве props придет свойство users,
// значением которого будут пользователи из state
const mapStateToProps = (state) => {
    return(
        {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalCount: state.usersPage.totalCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching
        }
    )
}

// mapDispatchToProps  предназначена для передачи в качестве props  в презентационную компоненту
// Users collbackов, которые презентационная компонента будет вызывать


export default connect (mapStateToProps, {follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
    })(UsersContainer)


