const ADD_MASSAGE = 'ADD-MASSAGE';
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';

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
    ],
    newMassageText: ''
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MASSAGE_TEXT:
            return {...state, newMassageText:action.newText}

        case ADD_MASSAGE:
            return {...state, massageData: [...state.massageData,{massage: state.newMassageText, id: '0', avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png"}],newMassageText:''}

        default:
            return state
    }
}
export const addMassageActionCreator = () => ({type: ADD_MASSAGE})
export const addUpdateNewMassageTextActionCreator = (text) => ({type: UPDATE_NEW_MASSAGE_TEXT, newText: text})

export default dialogReducer