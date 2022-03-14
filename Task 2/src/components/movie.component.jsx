import { Component } from "react";
import { connect } from "react-redux";
import { addMovie } from "../redux/index";

const mapStateToProps = ( state )=>{
    return {  numOfMovies : state.numOfMovies }
}

const mapDispatchToProps = ( dispatch )=>{
    return { addMovie : ()=> dispatch( addMovie() ) }
}

class MovieComponent extends Component{
    render(){
        return <div>
                    <h2>Using React Redux </h2>
                    <h3>Number of Movies : { this.props.numOfMovies }</h3>
                    <button onClick={ this.props.addMovie }>Add Movie</button>
                </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);