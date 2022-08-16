export const initialState = {
    username: null,
    token: null,
    songs: [],
    features: []
    };

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_USERNAME": return {
            ...state, 
            username: action.username
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