import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ButtonAppBar() {

  return (
    <nav className="header">
      <div className="header__logo">
        <h3>Excercise Tracker</h3>
      </div>
      <div className="header__nav">
        <NavLink activeClassName="header__linkActive" className="header__link" to='/' exact>ExcerciseList</NavLink>
        <NavLink activeClassName="header__linkActive" className="header__link" to='/add' exact>AddExcercise</NavLink>
        <NavLink activeClassName="header__linkActive" className="header__link" to='/edit/id' exact>EditExcercise</NavLink>
        <NavLink activeClassName="header__linkActive" className="header__link" to='/user' exact>CreateUser</NavLink>
      </div>
    </nav>
  );
}
