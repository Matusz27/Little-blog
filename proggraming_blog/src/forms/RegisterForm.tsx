
import classes from '../css/forms/registerform.module.css'

function RegisterForm() {

    function submitRegisternhandle(event:any){
        event.preventDefault();
    }

    return (<>
        <form className={classes.registerform} onSubmit={submitRegisternhandle}>
            <div className={classes.inputsfileds}>
                <input type="text" required id="username" placeholder="Username"/>
                <input type="email" required id="email" placeholder="E-mail" />
                <input type="password" required id="password" placeholder="Password" />
                <input type="password" required id="re_password" placeholder="Repete Password" />
            </div>
            <div className={classes.policy}>
                <input type="checkbox" required id="policy" />I accept the Account Policy
            </div>
            <input type="submit" value="Register"/>
        </form>
    </>);
}

export default RegisterForm