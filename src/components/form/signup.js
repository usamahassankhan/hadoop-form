import React from 'react'

function Signup() {
    return (
        <div className="signup">
            <h2 className="signup__head">Create Account</h2>
            <form className="signup__form">
                <input type="text" placeholder="Full Name" className="signup__field" />
                <input type="text" placeholder="Country" className="signup__field" />
                <input type="number" placeholder="Phone Number" className="signup__field" />
                <input type="Email" placeholder="Email" className="signup__field" />
                <input type="Password" placeholder="Password" className="signup__field" />
                <input type="password" placeholder="Re-Enter Password" className="signup__field" />
                <button className="login__btn mt-small">Signup</button>
            </form>
        </div>
    )
}

export default Signup;
