import * as C from './styles';
import styles from './module.styles.css'
import Layer2 from '../../assets/Layer2.svg';
import Layer3 from '../../assets/Layer3.svg';
import {ITask} from'../../App';

type Props={
    task: ITask;
    onDelete:(taskId:string)=>void;
    onComplete:(taskId:string)=>void;
}
export const Task = ({task, onDelete,onComplete}: Props) =>{

    return(
        <C.Div>
            <C.Button onClick={()=>onComplete(task.id)}>
               {task.isCompleted? <img src={Layer3}/>: <div/>} 
            </C.Button>
            <C.Pl>
              <C.P complete={task.isCompleted}>
                <p >
                    {task.title}
                </p>
            </C.P>  
            </C.Pl>
            
            <C.DelButton onClick={()=>onDelete(task.id)}>
                <img src={Layer2}/>
            </C.DelButton>
        </C.Div>
    )
}