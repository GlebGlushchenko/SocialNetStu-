import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Elements} from '../common/FormControls/FormControls';
import {required} from '../../utilite/validator';


const onSubmit = (formData) => {
    console.log(formData)
}
const Input = Elements('input')

const LoginForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name={'login'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Password" name={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)


const Login = (props)=>{
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login