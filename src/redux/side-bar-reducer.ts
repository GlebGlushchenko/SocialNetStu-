
export type initialStateType ={
    friendsData:Array<friendsDataType>
    bestFreinds:Array<bestFreindsType>
}

type friendsDataType ={
    avatar:string
    name:string
}

type bestFreindsType ={
    avatar:string
    name:string
}


let initialState:initialStateType = {
    friendsData:[
        {avatar:'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png',name:'Alex'},
        {avatar:'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png',name:'Gleb'},
        {avatar:'https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png',name:'Oleg'}

    ],
    bestFreinds:[
        {avatar:'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png',name:'Alex'},
        {avatar:'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png',name:'Gleb'},
        {avatar:'https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png',name:'Oleg'}

    ]
}

const sideBarReducer = (state = initialState,action:any):initialStateType =>{
    return state
}

export default sideBarReducer