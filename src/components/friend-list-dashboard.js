import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { FriendListCard } from './friend-list-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { GetFriendListAction } from '../actions/friend-list-action'

const FriendListDashboard = ({friendList, addFriend, removeFriend, getFriendList, ...props }) => {

    const demoList =[
        {
            id: '1',
            name: 'Anirudh Agarwal'
        },
        {
            id: '2',
            name: 'Sandeep Agarwal'
        },
        {
            id: '3',
            name: 'Aditya Agarwal'
        },
        {
            id: '4',
            name: 'Neelam Agarwal'
        },
    ]

    return(
        <div style={{backgroundColor: 'lightcyan', height: '100%', }}>
            <div style={{textAlign: 'left', backgroundColor: 'blue', color:'white'}}>
                <h2>Friends List</h2>
            </div>
            <div style={{paddingLeft: '240px', paddingBottom: '10px'}}>
                <button><FontAwesomeIcon icon={faPlusCircle} style={{ height:'20px', width:'20px'}}/></button>
                <FontAwesomeIcon icon={faSearch} style={{paddingLeft: '5px', height:'20px', width:'20px'}}/>
            </div>
            <div  style={{paddingLeft: '10px'}}>
                {demoList.map( i =>
                    (<FriendListCard id={i.id} name={i.name}/>))}
            </div>
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return{
        props : ownProps,
        friendList: state.friendListData,
        addFriend: state.addFriendData,
        removeFriend: state.removeFriendData
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getFriendList: (data) => dispatch(GetFriendListAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendListDashboard)