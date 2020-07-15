import classes from './Paginator.module.css';
import React, {useState} from 'react';
import nextBtnImg from '../../../assets/images/Array/next.png'
import prefBtnImg from '../../../assets/images/Array/previous.png'


const Paginator = ({totalItemsCount,pageSize,currentPage,onChangeToPage,portionSize = 10})=>{
    let pagesCount = Math.ceil(totalItemsCount   / pageSize)

    let pages =[]

    for(let i =1;i<=pagesCount;i++){
        pages.push(i)
    }

    let [portionNumber ,setPortionNumber] =useState(1)
    // ( P - 1 ) * Ps + 1
    let leftPortionNumber = (portionNumber -1) * portionSize +1
    // P * Ps
    let rightPortionNumber = portionNumber * portionSize
    // Колличество порций по 10 тоесть сколько порций по 10 будет вообще например 23 порции по 10
    let portionCount = Math.ceil(pagesCount / portionSize)

    return(
        <div className={classes.page}>
            {portionNumber > 1 &&
            <button className={classes.btn} onClick={()=>{setPortionNumber(portionNumber-1)}}> &#8592; </button>}

            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(page =>{
                    return <span className={currentPage === page && classes.selectedPage} onClick={(e)=>{onChangeToPage(page)}}>{page}</span>
                })}
            {portionCount > portionNumber &&
            <button className={classes.btn} onClick={()=>{setPortionNumber(portionNumber +1)}}> &#8594; </button>}
            <div className={classes.totalItemsCount}>{`Всего страниц: ${pagesCount}`}</div>
        </div>
    )





















    // let portionCount = Math.ceil(pagesCount / portionSize)
    // let [portionNumber,setPortionNumber] =useState(1)
    //
    // // (p -1) * Ps
    // let leftPortionPageNumber = (portionNumber -1) * portionSize + 1
    // let rightPortionPageNumber = portionNumber * portionSize
    //
    // return (
    //     <div className={classes.page}>
    //         {portionNumber > 1 &&
    //         <button onClick={()=>{setPortionNumber(portionNumber -1)}}>PREF</button>}
    //
    //         {pages.filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
    //             .map(pag => {
    //                 return <span className={currentPage === pag && classes.selectedPage}
    //                              onClick={(e)=>{
    //                                  onChangeToPage(pag)}}>{pag}</span>})}
    //
    //         {portionCount > portionNumber &&
    //         <button onClick={()=>{setPortionNumber(portionNumber +1)}}>NEXT</button>}
    //         <div className={classes.totalItemsCount}>{`Всего страниц: ${pagesCount}`}</div>
    //     </div>
    // )





    // return(
    //     <div className={classes.page}>
    //         {pages.map(pag => {
    //             return <span className={currentPage === pag && classes.selectedPage}
    //                          onClick={(e)=>{
    //                              onChangeToPage(pag)}}>{pag}</span>})}
    //     </div>
    //
    // )
}

export default Paginator

