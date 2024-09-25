
import React from 'react'
import { useState } from "react";


const Tasks = () => {
    const task_list = [
        {
            num : 1,
            descricao: "Fazer tarefa de casa",
            dia:"12/03/2014"
        },
        {
            num : 2,
            descricao: "Estudar para Concurso",
            dia:"11/03/2014"
        },
        {
            num : 3,
            descricao: "Limpar a casa",
            dia:"12/03/2014"
        }
    ]
    const [state,setState] = useState()
    function addTask(task){
        setState(task_list.push(task))
    }
  return (
    <div>Tasks</div>

  )
}

export default Tasks