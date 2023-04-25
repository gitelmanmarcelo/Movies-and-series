import { connect } from 'react-redux';
import { searchMovies } from '../redux/actions';
import { Link } from 'react-router-dom'

export const SearchMovies = (props) => {
    return (
        <main>
            <div id='searchDiv'>
            <h3><i className="fa-solid fa-magnifying-glass"></i> Search for a movie, TV series ...</h3>
            <form onSubmit={props.handleSubmit}>
                <input id="search"/>
                <div><button>Search</button></div>
            </form>
            </div>
            <div>
                <div id="moviesGrid">
                {(props.movies.length > 0) ?
                    props.movies.map((movie,index) => (
                    <div key={index}>
                        <img src={movie.Poster} alt=""/>
                        <p>{movie.Title}</p>
                        <p>{movie.Year}</p>
                        <button><Link to={'/Movies-and-series/details/'+ movie.imdbID}>Movie Details &gt;</Link></button>
                        <br/><br/>
                    </div>
                ))
                :
                <div id="noMovies"><h2>no movies</h2></div>
                }
                </div>
            </div>
        </main>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      handleSubmit : (e) => {
        e.preventDefault();
        dispatch(searchMovies(e.target.search.value));
      }
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      movies : state.movies
    }
  
  }

  export default connect(mapStateToProps,mapDispatchToProps)(SearchMovies);
