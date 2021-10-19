
import classes from '../css/forms/loginform.module.css'

function LoginForm() {

    function submitLoginhandle(event:any){
        event.preventDefault();
    }

    return (<>
        <>
            <form className={classes.loginform}  onSubmit={submitLoginhandle}>
                <div className={classes.inputsfileds}>
                    <input type="text" required id="username" placeholder="Username"/>
                    <input type="password" required id="password" placeholder="Password" />
                <div className={classes.remember} ><input type="checkbox" id="remember" />Remember me</div>
                </div>
                <input type="submit" value="Login"/>
            </form>
        </>
    </>);
}

export default LoginForm