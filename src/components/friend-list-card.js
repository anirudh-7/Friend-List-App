import React from 'react';
import '../css/friend-list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrashAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const FriendListCard = (props) => {


    return(
        <div className="Friend-Card">
            <span className="Friend-Profile">
                <FontAwesomeIcon icon={faUserCircle} style={{width: '50px', height: '30px', paddingTop:'20px'}}/>
                <label className="Friend-Name-lbl">{props.name}</label>   
            </span>
            <span className="Friend-Actions">
                { props.favorite === 1 ?  <button className="Friend-User-Btn" onClick={(event) => props.addFavorite(props.id,event)}><FontAwesomeIcon icon={faStar} color="blue" /></button>
                : <button className="Friend-User-Btn" onClick={(event) => props.addFavorite(props.id, event)}><FontAwesomeIcon icon={faStar} /></button>}
                <button className="Friend-User-Btn" onClick={(event) => {if(window.confirm("Remove Friend?")){props.removeFriend(props.id, event)}} }><FontAwesomeIcon icon={faTrashAlt} /></button>
            </span>
            <br></br>
            <label style={{paddingLeft: '50px', paddingBottom: '20px'}}>{props.favorite === 1 ? 'is your fav friend' : 'is your friend'}</label>

        </div>
    )
}

export { FriendListCard }