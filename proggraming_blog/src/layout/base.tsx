import { useState } from 'react'

import classes from '../css/layout/base.module.css'
import Header from '../layout/header';
import Backdrop from '../layout/backdrop';
import MobileMenu from '../layout/modal_mobile';


export default function BaseComponent(child:any) {


    const [MobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    return (
        <>
        <Header onOpen = {setMobileMenuIsOpen}/>
        <main className={classes.main}>
            <svg className={classes.swirl} viewBox="0 0 357 435" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_ii)">
                    <path d="M356.753 219.562V0C333.017 175.367 108.799 217.829 0 219.562H356.753Z M0.24723 219.562C0 219.562 0.24723 435 0.24723 435C23.983 262.926 248.201 221.261 357 219.562C357 219.562 0.49446 219.562 0.24723 219.562Z" fill="#561111" />
                </g>
                <defs>
                    <filter id="filter0_ii" x="-3" y="-5" width="363" height="446" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-3" dy="-8" />
                        <feGaussianBlur stdDeviation="2.5" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="3" dy="6" />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                    </filter>
                </defs>
            </svg>
            {child.children}
            {MobileMenuIsOpen && <MobileMenu/>}
            {MobileMenuIsOpen && <Backdrop onClose={setMobileMenuIsOpen}/>}
            
            
        </main>
    </>)
}
