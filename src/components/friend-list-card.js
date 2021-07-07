import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrashAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const FriendListCard = (props) => {


    return(
        <div style={{width: '300px', paddingLeft: '15px', border: '0.5px solid black', borderRadius: '5px', paddingBottom: '10px'}}>
            <span style={{ width:'70%', marginRight: '40px'}}>
                <FontAwesomeIcon icon={faUserCircle} style={{width: '50px', height: '30px', paddingTop:'10px'}}/>
                <label>{props.name}</label>   
            </span>
            <span style={{ width:'30%'}}>
                { props.favorite === 1 ?  <button onClick={(event) => props.addFavorite(props.id,event)}><FontAwesomeIcon icon={faStar} color="blue" /></button>
                : <button onClick={(event) => props.addFavorite(props.id, event)}><FontAwesomeIcon icon={faStar} /></button>}
                <button  onClick={(event) => props.removeFriend(props.id, event)}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </span>
            <br></br>
            <label style={{paddingLeft: '50px'}}>is your friend</label>

        </div>
    )
}

export { FriendListCard }