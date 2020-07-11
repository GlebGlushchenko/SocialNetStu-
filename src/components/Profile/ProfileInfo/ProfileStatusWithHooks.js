import React, {useState} from 'react';
import Preloader from '../../common/Preloader/Preloader';

const ProfileStatusWithHooks =(props)=>  {

    const [editMode,setEditMode] = useState(false)
    const [status,setStatus] = useState(props.status)

    const activateEditMode =()=>{
        setEditMode(true)
    }
    const deactivateEditMode = ()=>{
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange =(e)=>{
        setStatus(e.currentTarget.value)
    }

    const [count,setCount] =useState(0)

    const handleAlertClick =()=>{
        setTimeout(()=>{
            console.log('You clicked on : ' + count)
        },3000)
    }
    handleAlertClick()


    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count +1)}}>+</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <hr/>
            <button onClick={handleAlertClick}>Show</button>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '---------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onBlur={deactivateEditMode} onChange={onStatusChange} autoFocus={true} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks