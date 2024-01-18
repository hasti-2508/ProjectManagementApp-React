import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd,onCancel}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();
    
    function handleChange(){
        const setTitle = title.current.value;
        const setDescription = description.current.value;
        const setDueDate = dueDate.current.value;

        if(setTitle.trim() === '' || setDescription.trim() === '' || setDueDate.trim() === 0){
            modal.current.open();
            return;
        }
    
    onAdd({
        title: setTitle,
        description: setDescription,
        dueDate: setDueDate
    })
}
    return (
        <>
        <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-900 my-4" >Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops..looks like you forgot to enter a value</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end gap-4 my-4">
            <li><button onClick={onCancel}  className="text-stone-800 hover:text-stone-950  px-6 py-2">Cancel</button></li>
            <li><button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={handleChange}>Save</button></li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title"/>
            <Input ref={description} label="Description" textarea/>
            <Input type="date" ref={dueDate} label="Due date" />
        </div>
    </div>
        </>
    )
}       