import * as React from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';


 class ResultsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  handleSearch = async (searchString) => {
    try{ 
      const response = await axios(
        `${process.env.REACT_APP_OMDB_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchString}`
      );
      const data = response.data;
      // setMovies(data.Search);
      console.log(data)
      this.setState({ searchResults: data })
      console.log(this.state)
    } catch(err) {
      console.log(err)
    }
  };

  render() {
    return (
      <>
        {this.props.results.length === 0
          ? <></>
          : (<>
              <h1>{console.log(this.props.results)}</h1>
              {this.props.results.Search.map((movie,index)=>{
                return <MovieCard 
                movie={movie}
                key={index} />
              })}
            </>)
        }
      </>
    );
  }
}

  export default ResultsView