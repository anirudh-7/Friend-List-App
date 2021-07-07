import React, {useState, useEffect} from 'react';
// import { connect } from 'react-redux';
import { FriendListCard } from './friend-list-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faSearch, faArrowLeft, faArrowRight, faFilter, faSearchMinus, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
// import { GetFriendListAction } from '../actions/friend-list-action'

const FriendListDashboard = ({friendList, addFriend, removeFriend, getFriendList, ...props }) => {

    const [name, setName] = useState('')
    const [searchName, setSearchName] = useState('')
    const [id, setId] = useState(1)
    const [friendsList, setFriendsList] = useState([])
    const [displayList, setDisplayList] = useState([])
    const [maxPageCount, setMaxPageCount] = useState(1)
    const [pageNumber, setPageNumber] = useState(1)
    const [isInvalid, setInValid] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [initialState, setInitialState] = useState([])

    const records_per_page = 4


    const handleAdd = () =>{
        let temp ={
            id: id,
            name: name,
            isFavorite: 0 
        }
        var name_exists = friendsList.filter(function(i){
            return i.name === name;           
        })
        var letters = /^[A-Za-z]+$/;

        if(name_exists.length > 0 ){
            setInValid(true)
            setErrorMessage('Name already exists!')
        }
        else if (!name.match(letters)){
            setInValid(true)
            setErrorMessage('Name cannot be numeric')
        }
        else if (isInvalid === false){
            setFriendsList([...friendsList, temp])
            setId(id+1);
            setName('')
        }
        
    }

    useEffect(() =>{
        if(name.length === 0){
            setErrorMessage('')
            setInValid(false)
        }
    }, [name, errorMessage])

    const handleSearch = () =>{
        setInitialState(friendsList)
        var modified = friendsList.filter(function(i){
            return i.name.startsWith(searchName);
        })
        setFriendsList(modified)
    }

    const resetSearch = () => {
        setSearchName('')
        setFriendsList(initialState)
        setInitialState([])
    }

    useEffect(() => {
        let temp = []
        let max_page_count = (friendsList.length % records_per_page) === 0 ?  Math.floor(friendsList.length/records_per_page) : Math.floor(friendsList.length/records_per_page) + 1
        setMaxPageCount(max_page_count)
        for(var i = 0; i<friendsList.length; i++){
            if(friendsList[i].id > ((pageNumber-1)*records_per_page) && friendsList[i].id < (pageNumber*records_per_page + 1))
            {
                temp.push(friendsList[i])
            }
        }
        console.log(temp, max_page_count)
        setDisplayList(temp)
    }, [friendsList, pageNumber])

    const setFavorite = (id) =>{
        let temp = []
        for(var i =0; i<friendsList.length; i++){
            if(friendsList[i].id === id){
                    if(friendsList[i]['isFavorite'] === 0){friendsList[i]['isFavorite'] = 1}
                    else{friendsList[i]['isFavorite'] = 0}
            }
            temp.push(friendsList[i])
        }
        setFriendsList(temp)
    }

    const handleDelete = (id) =>{
        var modified = friendsList.filter(function(i){
            return i.id !== id;
        })
        setFriendsList(modified)

    }

    const handlePagination = (operation) => {
        let currentpage = pageNumber
        if(pageNumber > 1 && operation === 'left'){
            setPageNumber(currentpage-=1)
        }
        else if(currentpage < maxPageCount && operation === 'right'){
            setPageNumber(currentpage+=1)
        }
    }

    const filterFavorite = () =>{
        setInitialState(friendsList)
        var modified = friendsList.filter(function(i){
            return i.isFavorite === 1;
        })
        setFriendsList(modified)
    }

    const resetFilterFavorite = () =>{
        // setSearchName('')
        setFriendsList(initialState)
        setInitialState([])
    }

    return(
        <div style={{backgroundColor: 'lightcyan', height: '100%', }}>
            <div style={{textAlign: 'left', backgroundColor: 'blue', color:'white'}}>
                <h2>Friends List</h2>
            </div>
            <div style={{paddingLeft: '40px', paddingBottom: '10px'}}>
                <input placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} ></input>
                <button onClick={handleAdd}><FontAwesomeIcon icon={faUserPlus} style={{ height:'20px', width:'20px'}}/></button>  
                <br></br>
                {(isInvalid && name.length > 0) && <span style={{color:'red'}}>{errorMessage}</span>}
            </div>
            <div style={{paddingLeft: '40px', paddingBottom: '10px'}}>
                <input placeholder="Search Name" value={searchName} onChange={e => setSearchName(e.target.value)}></input>
                <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} style={{paddingLeft: '5px', height:'20px', width:'20px'}}/></button>
                <button onClick={resetSearch}><FontAwesomeIcon icon={faSearchMinus} style={{paddingLeft: '5px', height:'20px', width:'20px'}}/></button>
            </div>
            <div style={{paddingLeft: '40px', paddingBottom: '10px'}}>
            <button onClick={filterFavorite}><FontAwesomeIcon icon={faFilter} style={{paddingLeft: '5px', height:'20px', width:'20px'}}/>Filter favorite</button>
                <button onClick={resetFilterFavorite}><FontAwesomeIcon icon={faMinusSquare} style={{paddingLeft: '5px', height:'20px', width:'20px'}}/>Clear Filter</button>
            </div>
            <div  style={{paddingLeft: '10px'}}>
                {displayList.map( i =>
                    (<FriendListCard key={i.id} id={i.id} name={i.name} favorite={i.isFavorite} addFavorite={setFavorite} removeFriend={handleDelete}/>))}
                
            </div>
            <div>
                <span>
                    { pageNumber > 1 &&
                        <button onClick={(event) => handlePagination('left', event)}><FontAwesomeIcon icon={faArrowLeft} style={{paddingLeft: '5px', height:'20px', width:'20px'}}/></button>}
                    <label>{pageNumber}</label>
                    { displayList.length >=4 &&
                        <button onClick={(event) => handlePagination('right', event)}><FontAwesomeIcon icon={faArrowRight} style={{paddingLeft: '5px', height:'20px', width:'20px'}}/></button>}
                </span> 
            </div>
        </div>
    )
}

// const mapStateToProps = (state, ownProps) => {
//     return{
//         props : ownProps,
//         friendList: state.friendListData,
//         addFriend: state.addFriendData,
//         removeFriend: state.removeFriendData
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return{
//         getFriendList: (data) => dispatch(GetFriendListAction(data))
//     }
// }

export {FriendListDashboard}