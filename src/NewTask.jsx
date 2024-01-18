import { useState } from "react"

export default function NewTask({onAdd, onDelete}){

    const[EnteredTask, setEnteredTask]= useState('')

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(){
        if(EnteredTask.trim() === ''){
            return;
        }
        onAdd(EnteredTask)
        setEnteredTask('');
    }
    return <div className="flex items-center gap-4">
        <input type="text" onChange={handleChange} value = {EnteredTask}className="w-64 p-0.5 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
        <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
}