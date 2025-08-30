import './Movie.css'

type Movie = {
    date: string,
    person: string,
    title: string,
    streamingService: string,
    rating: string,
    posterURL: string,
    id: string
}

export default function Album(props:Movie){

    const date = new Date(props.date)

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const formattedDate = new Intl.DateTimeFormat('en-us', options).format(date);
    
    return  <div className={`movie ` + props.person} id={props.id}>
                <img src={props.posterURL} className="moviePoster" />
                <h1 className="movieTitle">{props.title}</h1>
                <h2 className="movieDate">{formattedDate}</h2>
                <h2 className="movieService">{props.streamingService}</h2>
                <h2 className="movieRating">{props.rating}</h2>
            </div>
}