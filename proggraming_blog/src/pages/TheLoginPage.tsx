import BaseComponent from '../layout/base';
import LoginForm from '../forms/LoginForm';
import classes from '../css/page_specific/loginpage.module.css'

function TheLoginPage() {

    return (<>
        <BaseComponent>
        <div className={classes.wrapper}>
            <div className={classes.loginwindow}>
                <h1>Login</h1>
                <LoginForm/>
            </div>
        </div>
        </BaseComponent>
    </>);
}

export default TheLoginPage