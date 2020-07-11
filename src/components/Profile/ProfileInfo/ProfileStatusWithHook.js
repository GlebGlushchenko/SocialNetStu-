import React, {useEffect, useState} from 'react';

const ProfileStatusWithHook = (props) =>{
    const [editMode,setEditMode] = useState(false)
    const [status,setStatus] = useState(props.status)

    const activateEditMobe =()=>{
       setEditMode(true)
    }
    const deactivateEditMode =()=>{
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange =(e)=>{
        setStatus(e.currentTarget.value)
    }
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

        return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMobe} >{props.status || '---------'}</span>
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

export default ProfileStatusWithHook