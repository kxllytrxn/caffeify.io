export const initialState = {
    token: null,
    songs: [],
    features: []
};

export const getToken = () 

const reducer = (state, action) => {
    switch(action.type) {
        case "REMOVE_TOKEN": return {
            ...state,
            token: null
            }
        case "SET_TOKEN": return {
            ...state, 
            token: action.token
            }
        case "SET_FEATURES": return {
            ...state, 
            features: action.features
            }
        case "SET_SONGS": return {
            ...state, 
            songs: action.songs
            }
        default:
        return state;
  }
};

export default reducer;
