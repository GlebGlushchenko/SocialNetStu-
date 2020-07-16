import * as axios from 'axios';

const instance= axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        'API-KEY': '93f42b4f-f61d-4a66-8bea-68ef966acb3e'
    }

})

export  const userAPI = {
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
            return response.data
            })
    }
}

export  const followAPI ={
    deleteFolllow(id){
        return instance.delete(`follow/${id}`)
            .then(response=>{
                return response.data
            })
    },

    postFollow(id){
        return instance.post(`follow/${id}`)
            .then(response=>{
                return response.data
            })
    }

}

export const authAPI ={
    requestAuth(){
        return instance.get('auth/me')
    },
    login(email,password,rememberMe=false){
        return instance.post('auth/login',{email,password,rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updataStatus(status){
        return instance.put('profile/status',{
            status:status
        })
    },
    savePhoto(filePhoto){
        const formData = new FormData()
        formData.append('image',filePhoto)
        return instance.put('profile/photo',formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
