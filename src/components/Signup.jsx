import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser, setUserData } from '../actions/UserActions';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const dispatch = useDispatch();
    const [user, setUserDetails] = useState({
        email:'',
        password:'',
        name: ''
    });

    const navigate = useNavigate();
      
    const onSubmit = e => {
        e.preventDefault();
        
        dispatch(setUserData(user));

        dispatch(createNewUser({user}));

        navigate('/dashboard');
    };

    const onChangeHandler = e => {
        setUserDetails({ ...user, [e.target.id]:e.target.value });
    };

    return(
        <div>
            <div  style={ { height: '90vh' } } className='container'>
                <div className="row"  style = { { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
                    <form className=" col s12">
                        <div className="row">
                            <div className="input-field col s12 black-text" style = { { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
                                <h3>Register</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 black-text">
                                <input id="email" type="email" className="validate" value={ user.email } onChange={onChangeHandler}/>
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 black-text">
                                <input id="password" type="password" className="validate" value={ user.password } onChange={onChangeHandler}/>
                                <label>Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 black-text">
                                <input id="passwordConfirmation" type="password" className="validate" value={ user.passwordConfirmation } onChange={onChangeHandler}/>
                                <label>Confirm Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12" style = { { textAlign:'center' } }>
                                <button className="btn btn-large btn-dark" onClick={onSubmit}>Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

