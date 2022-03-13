import { useEffect, useState } from 'react';
import config from './config.json'


function createRequestUrlBySearchTerm(pSearchTerm){
  return `${config.MOVIE_API_URL}${config.MOVIE_API_KEY}&s=${pSearchTerm}`
}


function App() {
  const [data, setData] = useState([]);
  const [mv, setMv] = useState({});
  const [currentMovie, setCurrentMovie] = useState(0);
  

  useEffect(()=>{
    // during initialization
    async function getData(){
      const response = await fetch(createRequestUrlBySearchTerm('batman'));
      const incomingData = await response.json();

      setData(incomingData.Search);
      setMv(incomingData.Search[0]);
    }

    getData();
  }, []);

  const nextMovie = () => {
    setCurrentMovie(currentMovie + 1);
    setMv(() => data[currentMovie]);
  }

  return (
    <div className="App">
      {
        <Movie movie={mv} />
      }
      <button onClick={nextMovie}>Next Movie</button>
    </div>
  );
}

export default App;

function Movie(props){
  const movie = props.movie;
  return (
    <>
      <h1>{movie.Title}, {movie.Year}</h1>
      <img src={movie.Poster} />
    </>   
  );
}