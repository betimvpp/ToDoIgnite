import * as C from './styles';
import { Task } from '../Task';
import {ITask} from '../../App';
import Clipboard from '../../assets/Clipboard.svg';

type Props ={
    tasks: ITask[];
    onDelete:(taskId:string)=>void;
    onComplete:(taskId:string)=>void;
}

export const Tasks = ({tasks, onDelete, onComplete}: Props) =>{
    const taskQuantity = tasks.length
    const completedTasks = tasks.filter((task)=>task.isCompleted).length;
    return(
        <C.Section>
            <C.Header>
                <C.Div>
                    <C.P>Tarefas criadas</C.P>
                    <C.Span>{taskQuantity}</C.Span>
                </C.Div>
                <C.Div>
                    <C.Pr>Tarefas concluidas</C.Pr>
                    <C.Span>{completedTasks} de {taskQuantity}</C.Span>
                </C.Div>
            </C.Header>
            <C.List>
                {tasks.map((task)=>(
                   <Task key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete}
                    /> 
                ))}
                {tasks.length<=0 && (
                    <C.SectionInv>
                        <img src={Clipboard}/>
                        <C.Pinv>Você ainda não tem tarefas Cadastradas!</C.Pinv>
                        <C.SpanInv>Crie tarefas e organize seus itens a fazer</C.SpanInv>
                    </C.SectionInv>
                )}
            </C.List>
        </C.Section>
    )
}