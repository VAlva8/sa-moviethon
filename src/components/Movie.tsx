import './Movie.css'

export default function Album(){
    return  <div className='movie'>
                <img src="https://m.media-amazon.com/images/M/MV5BNWZkZTU0YzItM2YyZi00NzdiLWEwYWMtZjJhMTFjYmVmYWE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" className="moviePoster" />
                <h1 className="movieTitle">Movie Title</h1>
                <h2 className="movieDate">October 1st, 2025</h2>
                <h2 className="movieService">Netflix</h2>
                <h2 className="movieRating">R</h2>
            </div>
}