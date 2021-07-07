import fetch from 'cross-fetch'

const GetFriendListAction = (request) => {
    return(dispatch) => {
        dispatch({type: "LOAD_USERS"})
        fetch('/get_friend_list', {
            method: "POST",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(request)
        }).then(response => response.json())
            .then(data => {
                dispatch({ type: "GET_USERS", ...data})
            }).catch(() => {
                dispatch({type: "ERROR_USERS"})
            })
    }
}

// const GetFriendListAction = (request) => {
//     return(dispatch) => {
//         dispatch({type: "LOAD_USERS"})
//         fetch('/get_friend_list', {
//             method: "POST",
//             mode: "cors",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(request)
//         }).then(response => response.json())
//             .then(data => {
//                 dispatch({ type: "GET_USERS", ...data})
//             }).catch(() => {
//                 dispatch({type: "ERROR_USERS"})
//             })
//     }
// }

export {
    GetFriendListAction
}