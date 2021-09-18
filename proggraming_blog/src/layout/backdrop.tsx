

import classes from '../css/layout/mobilemenu.module.css'


export default function Backdrop(props:any){
    function onClickOnOutside() {
        props.onClose(false)
    }
    return <div onClick={onClickOnOutside} className={classes.backdrop}/>
}