import ADD_MOVIE from "../types/movie.types";

const initialState = {
    numOfMovies : 0
};
const movieReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_MOVIE : return{ ...state, numOfMovies : state.numOfMovies + 1 }
        default : return state
    }
}

export default movieReducer;