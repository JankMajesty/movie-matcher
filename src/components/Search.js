import * as React from 'react';
import SearchBar from 'material-ui-search-bar';
import axios from 'axios';
import ResultsView from './ResultsView';


 class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchResults: []
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
        <SearchBar
          value={this.state.value}
          onChange={(newValue) => this.setState({ value: newValue })}
          onRequestSearch={() => this.handleSearch(this.state.value)}
        />
        <ResultsView 
          results={this.state.searchResults}
        />
      </>
      );
    }
  }

    export default Search