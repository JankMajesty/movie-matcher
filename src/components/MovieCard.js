import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  
  render() {
    return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {this.props.movie.Title}
        </Typography>
        <div>
        <img
        width="200"
        src={this.props.movie.Poster}
        alt={this.props.movie.Title}
      />
      </div>
      <Typography variant="h5" component="div">
          {this.props.movie.Year}
        </Typography>
      </CardContent>
    </Card>
    );
  }
}

  export default MovieCard