import BaseComponent from '../layout/base';
import RegisterForm from '../forms/RegisterForm';
import classes from '../css/page_specific/registerpage.module.css'

function TheRegisterPage() {

    return (<>
        <BaseComponent>
        <div className={classes.wrapper}>
            <div className={classes.registerwindow}>
                <h1>Register</h1>
                <RegisterForm/>
            </div>
        </div>
        </BaseComponent>
    </>);
}

export default TheRegisterPage