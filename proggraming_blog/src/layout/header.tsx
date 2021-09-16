

import classes from '../css/layout/header.module.css'



export default function header() {

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>Proggramist’s Space</h1>
            <svg width="35" height="35" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.16667 11.5625H30.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.16667 18.8854H30.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.16667 26.2084H30.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </header>
    )
}
