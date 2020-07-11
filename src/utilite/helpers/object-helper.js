export const updateObjectInArray = (item,itemId,objectPropertyName,newObjectProperty)=>{
    return  item.map(user => {
        if (user[objectPropertyName] === itemId) {
            return {...user, ...newObjectProperty}
        }
        return user
    })
}


