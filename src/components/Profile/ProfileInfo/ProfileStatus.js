import React from 'react';

class ProfileStatus extends React.Component{
    state={
        editMode: false,
        status:this.props.status
    }
    activateEditMobe =()=>{
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode=()=>{
        this.setState({
            editMode:false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange=(e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMobe}>{this.props.status || '---------'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus