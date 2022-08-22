import React, { Component } from "react";
import MovieList from "./MovieList";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      moviesList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/movies")
      .then((data) => 
        data.json()
	  )
      .then((movies) => {
		  this.setState({ moviesList: movies.data })
		  
      })
      .catch((e) => console.log(e))
  }

  render() {
    return (
      <React.Fragment>
        {/*<!-- PRODUCTS LIST -->*/}
        <h1 className="h3 mb-2 text-gray-800">
          All the movies in the Database
        </h1>

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                  </tr>
                </thead>
				{
				
				this.state.moviesList.map(movie => {
					return(
						<MovieList key={movie.id} 
						{...movie}
						/>

					)
				})
			  }
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                  </tr>
                </tfoot>
              </table>
			  
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Movie;
