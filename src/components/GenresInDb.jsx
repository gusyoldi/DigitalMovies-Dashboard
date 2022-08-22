
import Genre  from './Genre';
import React, {Component}  from 'react';


class GenresInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genresList : [],
            bgColor: "card-body",
        }
    };
   componentDidMount() {
        fetch('http://localhost:3001/api/genres')
        .then((response) => response.json())
        .then((genres) => {           
            this.setState({genresList : genres.data})
            
        })
        .catch(e => console.log(e))
    }    
    changeBackground = () => {
        document.querySelector('.fondoCaja').classList.toggle('bg-secondary');
        
    }

    render() {
        return (
            <React.Fragment>
                    
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 onMouseOver={() => {this.changeBackground()}} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                            </div>
                            <div className="card-body fondoCaja">
                                <div className="row">
                                    {
                                        this.state.genresList.map((genre,index)=>{
                                            return  <Genre  {...genre}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>               
            </React.Fragment>
        )
    };   
}
export default GenresInDb;