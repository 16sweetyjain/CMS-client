import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {getUserData } from '../actions/UserActions';
import { useNavigate } from 'react-router';

const SignIn = () => {

    const dispatch = useDispatch();
    const [user, setUserDetails] = useState({
        email:'',
        password:''
    });

    const navigate = useNavigate();

    const onSubmit = e => {
        e.preventDefault();

        dispatch(getUserData(user.email, user.password));

        navigate('/dashboard');

    };

    const onChangeHandler = e => {
        setUserDetails({ ...user, [e.target.id]:e.target.value });
        
    };

    return(
        <div>
            <div  style={ { height: '90vh' } } className='container'>
                <div className="row " >
                    <form className="col s12" style  = {{ marginTop:'100px' }}>
                        <div className="row">
                            <div className="input-field col s12 black-text" style = { { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
                                <h3>Login</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 center-align ">
                                <input id="email" type="email" className="validate" value={ user.email } onChange={ onChangeHandler }/>
                                <label> <b>Email</b> </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 center-align ">
                                <input id="password" type="password" className="validate" value={ user.password } onChange={ onChangeHandler }/>
                                <label> <b>Password</b> </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12" style = { { textAlign:'center' } }>
                                <button style={ { width: '100px', borderRadius: '3px', letterSpacing: '1.5px' } } className="btn btn-large btn-dark" onClick={ onSubmit }>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ); 
}

export default SignIn;
