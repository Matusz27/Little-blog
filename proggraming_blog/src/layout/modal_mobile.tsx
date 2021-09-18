
import {Link} from 'react-router-dom';


import classes from '../css/layout/mobilemenu.module.css'


export default function MobileMenu(){


    return(
        <div className={classes.mobilemenuContainer}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}