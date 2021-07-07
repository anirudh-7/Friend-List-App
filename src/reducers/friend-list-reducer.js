const initialFriendListState = {
    usersList : [],
    loading : true,
    error: false,
    };

function GetFriendListReducer(state = initialFriendListState, action) {
    switch (action.type) {
        case 'LOAD_USERS':
            return { ...state, usersList:[], error: false, loading: true }
        case 'GET_USERS':
            return { ...state, usersList: action.payload, error: false, loading: false }
        case 'ERROR_USERS':
            return { ...state, usersList: [], error: true, loading: false }
        default:
            return state;
    }
};

const initialAddFriendState = {
    usersList : [],
    loading : true,
    error: false,
    };

function AddFriendListReducer(state = initialAddFriendState, action) {
    switch (action.type) {
        case 'LOAD_USERS':
            return { ...state, usersList:[], error: false, loading: true }
        case 'GET_USERS':
            return { ...state, usersList: action.payload, error: false, loading: false }
        case 'ERROR_USERS':
            return { ...state, usersList: [], error: true, loading: false }
        default:
            return state;
    }
};

const initialDeleteFriendState = {
    usersList : [],
    loading : true,
    error: false,
    };

function DeleteFriendListReducer(state = initialDeleteFriendState, action) {
    switch (action.type) {
        case 'LOAD_USERS':
            return { ...state, usersList:[], error: false, loading: true }
        case 'GET_USERS':
            return { ...state, usersList: action.payload, error: false, loading: false }
        case 'ERROR_USERS':
            return { ...state, usersList: [], error: true, loading: false }
        default:
            return state;
    }
};

export {GetFriendListReducer, AddFriendListReducer, DeleteFriendListReducer};