import React, { Component } from "react";
import { createStore } from "redux";
//--------------------------------------------------
// action
const ADD_MOVIE = "ADD_MOVIE";
const REMOVE_MOVIE = "REMOVE_MOVIE";
 
// action creator
const addMovie = ()=>{
    return {
        type : ADD_MOVIE
    }
};
const removeMovie = ()=>{
    return {
        type : REMOVE_MOVIE
    }
};
 
// default state
const initialState = {
    numOfMovies : 0
}
 
// reducers
const movieReducer = ( state = initialState, action)=>{
    switch(action.type){
        case ADD_MOVIE : return {
            numOfMovies : state.numOfMovies + 1
        }
        case REMOVE_MOVIE : return {
            numOfMovies : state.numOfMovies - 1
        }
        default : return state
    }
}
 
// store
let store = createStore(movieReducer);
 
// subscribe / unsubscribe
store.subscribe(()=>{
    console.log(store.getState());
});
 
 
// dispatcher
 
 
//--------------------------------------------------
class MainApp extends Component{
    movieCount = React.createRef();
    render(){
        return <div className="container">
                    <h1>React Redux</h1>
                    <hr/>
                    <h2>Movies Count : <span ref={ this.movieCount }></span></h2>
                    <button className="btn btn-primary" onClick={ ()=>{
                        store.dispatch( addMovie() );
                        this.movieCount.current.textContent = store.getState().numOfMovies;
                    }}>Add Movie</button>
                    <button className="btn btn-warning" onClick={ ()=>{
                        store.dispatch( removeMovie() );
                        this.movieCount.current.textContent = store.getState().numOfMovies;
                    }}>Remove Movie</button>
                </div>
    }
}
 
export default MainApp;