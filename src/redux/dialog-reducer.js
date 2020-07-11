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
    ],
    massageData: [
        {massage: 'Hi', id: '1', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'},
        {massage: 'How is youre', id: '2', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png'},
        {massage: 'Bay!!', id: '3', avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'},
    ]
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MASSAGE:
            return {...state, massageData: [...state.massageData,{massage: action.newMassage, id: '0', avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png"}]}

        default:
            return state
    }
}
export const addMassageActionCreator = (newMassage) => ({type: ADD_MASSAGE,newMassage})

export default dialogReducer