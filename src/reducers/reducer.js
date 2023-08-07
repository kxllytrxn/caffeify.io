export const initialState = {
    token: null,
    songs: [],
    features: []
};

const spotifyReducer = (state, action) => {
    switch(action.type) {
        case "SET_TOKEN": return {
            ...state, 
            token: action.payload
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

export default spotifyReducer;
