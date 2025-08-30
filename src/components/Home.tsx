import './Home.css'
import Movie from './Movie.tsx'
import movieData from '../assets/movies.json';

export default function Home(){
    
    return  <div className='gridContainer'>
                    {movieData.map((movie, index) => <Movie date={movie.date} person={movie.person} title={movie.title} streamingService={movie.streamingService} rating={movie.rating} posterURL={movie.posterURL} key={index} id={movie.date}/>)}
            </ div>
}