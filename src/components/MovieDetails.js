import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetails } from '../redux/actions';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const MovieDetails = (props) => {
    const {id} = useParams();

    useEffect(() => {
        props.getDetails(id);
    },[])
    if (props.details)
    return (
        <div id="container">
            <div id="detailContainer">
                <div id="detailPoster">
                    <img src={props.details.Poster} alt=''/>
                </div>
                <div id="detailInfos">
                    <p>{props.details.Title}</p>
                    <p>Genre: {props.details.Genre}</p>
                    <p>Released: {props.details.Year}</p>
                    <p>Rated: {props.details.Rated}</p>
                    <p>IMDB Rating: {props.details.imdbRating}</p>
                    <p>Director: {props.details.Director}</p>
                    <p>Writer: {props.details.Writer}</p>
                    <p>Actors: {props.details.Actors}</p>
                </div>
            </div>
            <div id="plot">
                <h1>About</h1>
                <p>{props.details.Plot}</p>
                <div id="buttons">
                    <button><a href={"http://www.imdb.com/title/"+id}>View on IMDB</a></button>
                    <button><Link to='/'>Back to main page</Link></button>
                </div>
            </div>
        </div>
    ); else
    return (    <h1>No details</h1> );
}

const mapStateToProps = (state) => {
    return {
        details : state.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetails : (id) => {dispatch(getDetails(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);