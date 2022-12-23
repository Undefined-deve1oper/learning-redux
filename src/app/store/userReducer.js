const defaultState = {
    users: []
};

export const SET_USERS = "SET_USERS";
export const FETCH_USERS = "SET_USERS";

export default function userReducer( state = defaultState, actions ) {
    switch ( actions.type ) {
        case SET_USERS:
            return { ...state, users: actions.payload };
    }
    return state;
}

export const setUsers = ( payload ) => ({ type: SET_USERS, payload });
export const fetchUsers = () => ({ type: SET_USERS });