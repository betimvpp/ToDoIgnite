import * as C from './styles';
import todoLogo from '../../assets/todoLogo.svg';
import Layer1 from '../../assets/Layer1.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

type Props={
    onAddTask: (taskTitle: string)=> void;
}

export const Header = ({onAddTask}: Props)=>{
    const [title, setTitle]=useState("");

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value);
    }

    return(
        <C.Header>
            <img src={todoLogo}/>
            <C.Form onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder='Adicione uma nova tarefa'
                    onChange={onChangeTitle}
                    value={title}/>
                <button>Adicionar <img src={Layer1} alt="" /></button>
            </C.Form>
        </C.Header>
    )
}