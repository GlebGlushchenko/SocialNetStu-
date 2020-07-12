import classes from './Paginator.module.css';
import React from 'react';


const Paginator = ({totalUsersCount,pageSize,currentPage,onChangeToPage})=>{

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages =[]

    for(let i =1;i<=pagesCount;i++){
        pages.push(i)
    }
    return(
        <div className={classes.page}>
            {pages.map(pag => {
                return <span className={currentPage === pag && classes.selectedPage}
                             onClick={(e)=>{
                                 onChangeToPage(pag)}}>{pag}</span>})}
        </div>

    )
}

export default Paginator

