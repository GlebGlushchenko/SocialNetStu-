import React from 'react';
import classes from './FormControls.module.css'
import {required} from '../../../utilite/validator';
import {Field} from 'redux-form';


export const Elements = Elements=>({input,meta,...props})=>{

    const hasError = meta.touched && meta.error;
    return(
        <div className={classes.formControl + ' ' + (hasError ?classes.error:'')}>
            <div>
                <Elements className={classes.formConroleIntut} {...input} {...props} />
            </div>
            {hasError && <span className={classes.formErrar}>{meta.error}</span>}

        </div>
    )
}

export const creatorNewField= (placeholder,name,validate,component,props,text ='')=> (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props}/>{text}

    </div>
    )



