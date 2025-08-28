import './Home.css'
import today from '../assets/calendar.svg'
import Movie from './Movie.tsx'

export default function Home(){
    return  <>
                <div className='todayButton'>
                    <img className='todayImage' src={today}/>
                </div>
                <div className='gridContainer'>
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                </ div>
            </>
}