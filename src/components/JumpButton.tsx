import './JumpButton.css'
import today from '../assets/calendar.svg'

const jumpToToday = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    const id = month + "/" + day + "/" + year
    const div = document.getElementById(id);
    div?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
};

export default function TodayButton(){
    return  <div className='todayButton' id='todayButton' onClick={jumpToToday}>
                <img className='todayImage' src={today}/>
            </div>
}