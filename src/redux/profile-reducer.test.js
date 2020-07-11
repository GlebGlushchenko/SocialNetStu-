import React from 'react';
import profileReducer, {addPost, deletePost} from './profile-reducer';

let state = {
    postData: [
        {
            massage: 'Hi, how are you?',
            id: '1',
            likesCounter: 0,
            avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'
        },
        {
            massage: 'How is youre',
            id: '2',
            likesCounter: 0,
            avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png'
        },
        {
            massage: "It's my fist post ",
            id: '3',
            likesCounter: 0 ,
            avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png'
        },
    ]
}

test('length of postData should be incremented', () => {
    let action = addPost('TEST')


    let newState = profileReducer(state,action)

    expect(newState.postData.length).toBe(4)
});

test('Added item postData matches true',()=>{
    let action = addPost('TEST')


    let newState = profileReducer(state,action)
    expect(newState.postData[3].massage).toBe('TEST')
})

test('after deleting length of messages should be decrement',()=>{
    let action = deletePost(1)

    let newState = profileReducer(state,action)

    expect(newState.postData.length).toBe(2)
})

test(`after deleting length should't be decrement if id is incorrect`,()=>{
    let action = deletePost(1000)

    let newState = profileReducer(state,action)

    expect(newState.postData.length).toBe(3)
})