import React, { Component } from "react";
import MovieComponent from "./components/movie.component";
import { Provider } from "react-redux";
import store from "./redux/store";
import MovieHookComponent from "./components/movie.component.hook";

class MainApp extends Component{
    movieCount = React.createRef();
    render(){
        return <div className="container">
                    <h1>React Redux</h1>
                    <hr/>
                    <Provider store={ store }>
                        <MovieComponent/>
                        <MovieHookComponent/>
                    </Provider>
                </div>
    }
}

export default MainApp;