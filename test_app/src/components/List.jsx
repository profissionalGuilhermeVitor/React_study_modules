import React from 'react'
import { useState } from 'react'


const List = () => {
    const array = [{
      nome:"Guilherme",numero:1
    },{
      nome:"Joao",numero:3
    },{
      nome:"Barbara",numero:3
    },{
      nome:"Robson",numero:3
    },{
      nome:"Eduardo",numero:3
    }]
    const [num,setNum]= useState("")
    const filteredDataNome = array.filter((item)=>item.nome.toLowerCase().includes(num.toLowerCase())
    
  )
    function handleClick(element){
        setNum(element.target.value)
    }
    

  return (
    
    <div>
        <input type="text" onChange={handleClick} name="" id="" />
        {array.map((el)=><p>{el.nome}</p>)}
        <div>{filteredDataNome.map((item)=>(<h1>{item.nome}</h1>))}</div>
        
    </div>
  )
}

export default List