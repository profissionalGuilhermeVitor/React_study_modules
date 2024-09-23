import React from 'react'
import { useState } from 'react'


const List = () => {
    const array = [1,2,3,4,5]
    const [num,setNum]= useState("")
    function handleClick(element){
        setNum(element.target.value)
    }
    const filterData=array.filter((item)=>item)
  return (
    
    <div>
        <input type="text" onChange={handleClick} name="" id="" />
        <p>{array.filter((element)=>String(element).includes("1"))}</p>
        <p>s</p>
    </div>
  )
}

export default List