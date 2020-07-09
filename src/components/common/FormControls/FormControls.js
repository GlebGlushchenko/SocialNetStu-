import React from 'react';
import classes from './FormControls.module.css'

// export const Textarea =({input,meta,...props})=>{
//
//     const hasError = meta.touched && meta.error;
//     return(
//         <div className={classes.formControl + ' ' + (hasError ?classes.error:'')}>
//             <div>
//                 <textarea className={classes.formConroleTextarea} {...input} {...props} />
//             </div>
//             {hasError && <span className={classes.formErrar}>{meta.error}</span>}
//
//         </div>
//     )
// }
//
// export const Input =({input,meta,...props})=>{
//
//     const hasError = meta.touched && meta.error;
//     return(
//         <div className={classes.formControl + ' ' + (hasError ?classes.error:'')}>
//             <div>
//                 <input className={classes.formConroleIntut} {...input} {...props} />
//             </div>
//             {hasError && <span className={classes.formErrar}>{meta.error}</span>}
//
//         </div>
//     )
// }

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