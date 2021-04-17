import './App.css';
import  {useState} from 'react'
import MovieList from './components/MovieList'
import {Card} from './components/Card'
import Filter from './components/Filter'
import { BrowserRouter as Router,Route } from "react-router-dom";
import MovieOverview from './components/MovieOverview';


const App = (props) => {

const [state, setState] = useState({
  Card:Card,
  searchfield:''
})

  const onSearchChange = (event) => {
    setState({ searchfield: event.target.value })
   
  }

  const { searchfield } = state;
  const filteredMovies = Card.filter(movie =>{
    return movie.title.toLowerCase().includes(searchfield.toLowerCase());
  })
    
  
  return (
    <div className="App ">
      <Filter  searchChange={onSearchChange}/>
          <Router>
          
                <Route path="/movieoverview/:id" render={({match}) => 
                        <MovieOverview {...Card.find(item=>item.id == match.params.id)}/> 
                      } />
              
                
                <Route exact={true} path="/" children={<MovieList  Card={filteredMovies } />} />
          
          </Router>
         
    </div>
     
  );
}

export default App;
