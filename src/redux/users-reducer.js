import {followAPI, userAPI} from '../api/api';
import {updateObjectInArray} from '../utilite/helpers/object-helper';
//Вынос в константу значения для type у экшина просто удобнее и меньше шансов ошибиться
const FOLLOW = 'network/users/FOLLOW';
const UNFOLLOW = 'network/users/UNFOLLOW';
const SET_USERS = 'network/users/SET-USERS';
const CURRENT_PAGE = 'network/users/CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'network/users/TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLOOWING_PROGRESS = 'network/users/TOGGLE_IS_FOLOOWING_PROGRESS';


// Инициализируем дефолтное значение для стейта
let initialState = {
    users: [],
    user: 0,
    pageSize: 10 ,
    totalUsersCount: 0,
    currentPage:1,
    isFetching:true,
    followingIsProgress:[]

}
    // Создаём Reducer в который передаём наш дефолтный стейт и экшины
const usersReducer = (state = initialState, action) => {
    // switch это то же if else
    switch (action.type) {
        // если в в экшине type рашен FOLLOW то мы попадаем сюда \/
        case FOLLOW:
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userId,'id',{followed:true})
            }
                // То же самое что и с Follow только меняем followed на false
        case UNFOLLOW:
            return {
                ...state,
               users: updateObjectInArray(state.users,action.userId,'id', {followed:false})
            }
        case SET_USERS:
            // копируем state и пушим в массив users новых юзеров которые нам пришли в экшине
            return {...state, users: action.users}

        case CURRENT_PAGE:
            // копируем state и изменяем значение currentPage на то что нам пришло в экшине
            return {...state,currentPage: action.currentPage}

        case TOTAL_USERS_COUNT:
            // копируем state и меняем значение которое пришло к нам в экшине + костыль делим это значение на 100 ибо там 5к пользователей а UI у нас не готов к этому
            return {...state,totalUsersCount: action.totalUsersCount/100}

        case TOGGLE_IS_FETCHING:
            // копируем state и записываем новое значение из экшbна
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLOOWING_PROGRESS:
            // возвращяем копию state
            return {...state,
                // пушим в массив значение из экшина с проверкой если action.isFetching true то тогда
                followingIsProgress:  action.isFetching
                    // то тогда в массив followingIsProgress записываем id из экшина
                    ? [state.followingIsProgress,action.id]
                        // иначе применяем метод filter для массива followingIsProgress и говорим если эелемент массива не равен той id которая нам пришла в экшине то его не нужно копирывать
                        // filter делает копию массива с условием тоесть если условие условие верно то элемент проходит дальше если не то его копия не создасться
                    : state.followingIsProgress.filter(id => id !== action.id)
            }
                //  и по дефолту мы возвращяем стейт если там не чего не поменялось и не один кейс не сработал т.е. стейт не изменился и мы вернули страый стейт и его не нужно отрисовывать зоного
        default:
            return state
    }
}
// создаём экшин ериэйтор ЭКШИН это обьет у которого есть как минимум свойство type тут мы просто создаём его
//  в Reducer пападает не экшин криэйтор а производное от него т.е экшин с type который уже будет прогоняться по switch
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE,currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: TOTAL_USERS_COUNT,totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING,isFetching} )
export const toggleIsFollowingIsProgress = (isFetching,id) => ({type: TOGGLE_IS_FOLOOWING_PROGRESS,isFetching,id} )
// Thunk Creator ему можно передать значение в параметры а обычной санке нет обычная санка просто принемает диспатч для это го мы и делаем для неё обёртку
export const getUsers =(currentPage,pageSize)=> {
    // Сама санка Thunk
    return async(dispatch) =>{
        // Thunk диспачит экшин криэйторы с нужны ми им значениями
        // не мы руками вызываем диспатч а санка тоесть там где нужно мы вызовем санку и она уже будет дичпатчить акшин криэёторы
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))
        let data = await userAPI.getUsers(currentPage,pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(toggleIsFetching(false))

    }
}

// ==Общий метод сокрощяет код избавляет от дублирования кода
// Определяем функцию и ждём что бы к нам в параметры передали то что мы хотим использовать внутри себя
//Это Thunk Creator
const followAndUnfollow = async (dispatch,userId,apiMethod,actionCreator)=>{
    // Вот это уже Thunk
    //Диспачим Экшин креэйтор и передаём значение в параметры
    dispatch(toggleIsFollowingIsProgress(true, userId))
    //axios запросс вернёт нам промис мы его схватим и помести в data await говорит нам о то что мы будем ждать пока наш асинхронный запрос выполнить и после этого пойдём ниже
    let data =await apiMethod(userId)
    //Тут мы проверяем что в ответе с сервера код равен 0 т.е всё хорошо
    if (data.resultCode === 0) {
        // и если условие верно то мы диспачим акшин креэйтор и передаём в него значение userID то которое он ждёт от нас
        dispatch(actionCreator(userId))
    }
    //Так же диспатч акшин криэйтора и передача в него значения который он ждёт
    dispatch(toggleIsFollowingIsProgress(false, userId))
}

// Thunk Creator
export const follow =(userId)=> {
    //Thunk Санка
    return async (dispatch) => {
        // Вызов этой функции и передача в неё значений которые ей нужны
        followAndUnfollow(dispatch,userId,followAPI.postFollow.bind(userId),followSuccess)
    }
}

// Thunk Creator
export const unFollow=(userId)=>{
    //Thunk Санка
    return async(dispatch)=>{
        // Вызов этой функции и передача в неё значений которые ей нужны
        followAndUnfollow(dispatch,userId,followAPI.deleteFolllow.bind(userId),unfollowSuccess)
    }
}
// Экспорт без привязки к имени т.е. имя при импорте может быть любое главное что бы путь был верный Осторожно!!!!!!
export default usersReducer
