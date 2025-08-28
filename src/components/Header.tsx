import './Header.css'
import logo from '../assets/logo.svg'

export default function Header(){
    return  <div className='header'>
                <img className='headerLogo' src={logo} />
                <hr className='headerLine'/>
                <h1 className='headerTitle'><b>2025</b> Moviethon</h1>
            </div>
}