import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import {Header} from '../src/components/Header'
import {Tasks} from '../src/components/Tasks'

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export type ITask = {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id:'teste',
      title:'Começar a estudar node!',
      isCompleted:false 
    },
    {
      id:'teste2',
      title:'Resolver atividades da faculdade!',
      isCompleted:true 
    }
  ]);

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
      setTasks(JSON.parse(saved));
    }
  }
  useEffect(()=>{
    loadSavedTasks();
  },[])
  function setTasksAndSave(newTasks: ITask[]){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string){
    setTasksAndSave([
      ...tasks,{
        id:crypto.randomUUID(),
        title:taskTitle,
        isCompleted:false

      }
    ]);
  }

  function deleteTaskById(taskId:string){
    const newTasks = tasks.filter((task)=>task.id!==taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompleted(taskId:string){
    const newTasks=tasks.map(task=>{
      if(task.id===taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks
      tasks={tasks} 
      onDelete={deleteTaskById}
      onComplete={toggleTaskCompleted}
      />
    </>
  )
}

export default App
