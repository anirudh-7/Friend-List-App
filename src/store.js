import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import {GetFriendListReducer, AddFriendListReducer, DeleteFriendListReducer} from './reducers/friend-list-reducer';

const store = createStore(
    combineReducers({
        friendListData: GetFriendListReducer,
        addFriendData: AddFriendListReducer,
        removeFriendData: DeleteFriendListReducer
    }),
    applyMiddleware(thunk)
);

export default store;