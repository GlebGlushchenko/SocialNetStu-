const ADD_MASSAGE = 'network/dialog/ADD-MASSAGE';


let initialState = {
    dialogData: [
        {name: 'Vova', id: '1', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'},
        {name: 'Andrey', id: '2', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png'},
        {name: 'Max', id: '3', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png'},
        {name: 'Gleb', id: '4', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'},
        {name: 'Natasha', id: '5', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png'},
        {name: 'Tolik', id: '6', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png'},
        {name: 'Gosha', id: '7', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'}
    ] as Array<dialogDataType>,
    massageData: [
        {massage: 'Hi', id: '1', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'},
        {massage: 'How is youre', id: '2', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png'},
        {massage: 'Bay!!', id: '3', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'},
    ] as Array<massageDataType>
}


export type initialStateType = typeof initialState

type dialogDataType ={
    name:string
    id:string
    avatar:string
}

type massageDataType ={
    massage:string
    id:string
    avatar:string
}


const dialogReducer = (state:initialStateType = initialState, action:any):initialStateType => {

    switch (action.type) {

        case ADD_MASSAGE:
            return {...state, massageData: [...state.massageData,{massage: action.newMassage, id: '0', avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png"}]}

        default:
            return state
    }
}

type addMassageActionCreatorType={
    type:typeof ADD_MASSAGE
    newMassage:string
}
export const addMassageActionCreator = (newMassage:string):addMassageActionCreatorType => ({type: ADD_MASSAGE,newMassage})

export default dialogReducer