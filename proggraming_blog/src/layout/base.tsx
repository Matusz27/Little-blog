

import classes from '../css/layout/base.module.css'


export default function BaseComponent(child:any) {

    return (
        <main className={classes.main}>
            {child.children}
        </main>
    )
}
