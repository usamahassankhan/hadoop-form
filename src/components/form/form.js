import React from 'react';
import bg from '../../img/bg.png';
import logo from '../../img/logo.png';
import Login from './login';
import SignUp from './signup'
import { NavLink } from 'react-router-dom';
import {Switch, Route } from 'react-router-dom';

function Form() {
    return (
        <div className="form">
            <div className="form__content">
                <div className="form__left">
                    <img src={logo} alt="logo" className="form__logo" />
                    <div className="form__links">
                        <NavLink to='/signup' className="form__link" activeClassName="form__link-active">SignUp</NavLink>
                        <NavLink to='/login' className="form__link" activeClassName="form__link-active">signin</NavLink>
                    </div>
                    <Switch>
                        <Route exact path='/login'>
                            <Login />
                        </Route>
                        <Route exact path='/signup'>
                            <SignUp />
                        </Route>
                    </Switch>
                </div>
                <div className="form__right">
                    <img src={bg} alt="bg" className="form__right-img" />
                </div>
            </div>


        </div>
    )
}

export default Form;
