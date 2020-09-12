import React, { useState } from 'react';

function Login() {

    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');

    return (
        <div className="login">
            <h2 className="login__head">Login</h2>
            <p className = "login__text">Contrary to popular belief, Lorem Ipsum is not simply random text.
                 It has roots in a piece of classical Latin literature</p>
            <form className="login__form">
                <input type = "email" placeholder = "Email" className = "login__field" value = {email} 
                        onChange = {e => setEmail(e.target.value)} />
                <input type = "password" placeholder = "Password" className = "login__field" value = {pass} 
                        onChange = {e => setPass(e.target.value)}/>
                <p>Forgot Password ?</p>
                <button className = "login__btn">Login</button>
            </form>
        </div>
    )
}

export default Login;
