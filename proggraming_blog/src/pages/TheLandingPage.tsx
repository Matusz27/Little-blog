import BaseComponent from '../layout/base';


import classes from '../css/page_specific/mainpage.module.css'
import Laptop_pic from '../images/Base/Laptop.png'

function TheLandingPage() {

    return (
        <BaseComponent>
            <div className={classes.hero}>
                <h3>Welcome to my blog!</h3>
                <h1>Proggramist’s space is a <br/> React Based Blog!
                    <svg width="68" height="31" viewBox="0 0 68 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M54 8.99996C34.5195 23.2356 9.802 19.6599 5.73587 18.1718" stroke="#870000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </h1>
            </div>
            <img className={classes.laptop_pic} src={Laptop_pic} alt = "laptop"/>
        </BaseComponent>
    );
}

export default TheLandingPage