import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Elements} from '../common/FormControls/FormControls';
import {required} from '../../utilite/validator';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import classes from './Login.module.css'




const Input = Elements('input')

const LoginForm =(props)=>{

    return(
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field placeholder="Email" name={'email'} type={'email'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder="Password" name={'password'} type={'password'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
            {props.error && <div className={classes.error}>
                <div>{props.error}</div>
            </div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)


const Login = (props)=>{
    const onSubmit = (formData) => {
        let {email,password,rememberMe} = formData
        props.login(email,password,rememberMe)

    }
    if(props.auth){
        return <Redirect to={'/profile'}/>
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
            {}
        </div>
    )
}
let mapStateToProps =(state)=>{
    return{
        auth:state.auth.isAuth
    }

}

export default connect(mapStateToProps,{login})(Login)