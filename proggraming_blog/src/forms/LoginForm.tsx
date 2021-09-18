
import classes from '../css/page_specific/loginpage.module.css'

function LoginForm() {

    return (<>
        <div className={classes.loginform}>
            <form>
                <input type="text" required id="username" placeholder="Username"/>
                <input type="password" required id="username" placeholder="Password" />
                <input type="checkbox" id="remember"/>Remember me
                <input type="submit" value="Login"/>
            </form>
        </div>
    </>);
}

export default LoginForm