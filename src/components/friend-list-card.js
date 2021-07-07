import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrash, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const FriendListCard = (props) => {

    return(
        <div style={{width: '300px', paddingLeft: '15px', border: '0.5px solid black', borderRadius: '5px', paddingBottom: '10px'}}>
            <span style={{ width:'70%', marginRight: '40px'}}>
                <FontAwesomeIcon icon={faUserCircle} style={{width: '50px', height: '30px', paddingTop:'10px'}}/>
                <label>{props.name}</label>   
            </span>
            <span style={{ width:'30%'}}>
                <button><FontAwesomeIcon icon={faStar} /></button>
                <button><FontAwesomeIcon icon={faTrash} /></button>
            </span>
            <br></br>
            <label style={{paddingLeft: '50px'}}>is your friend</label>

        </div>
    )
}

export { FriendListCard }