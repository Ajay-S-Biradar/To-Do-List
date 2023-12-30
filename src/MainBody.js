import React, { useEffect, useState } from 'react'
import Header from './Header'

const MainBody = () => {
    const [todos,setTodos] = useState([]);
    const [edit,setEdit] = useState();
    const [updatecontent,setUpdateContent] = useState();

    const addtodo = async (activity)=>{
        let data = ([...todos,activity]); 
        setTodos(data)
        localStorage.setItem('todos', JSON.stringify(data));
    }

    useEffect(()=>{
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    },[]);

  return (
    <div className='container h-[100vh] bg-orange-200'>
    <div className='content-center justify-center items-center flex flex-col gap-8 relative top-[6rem]'>
        <div>
            <h1 className='text-5xl font-bold shadow-lg'>To Do List</h1>
        </div>
        <div className='block'>
            <Header addtodo={addtodo} />
        </div>
    <div className='flex flex-col'>
        {
            todos.map((x,ind)=>{
                
                return (
                    edit===ind ?
                        <div>
                            <input
                                value={updatecontent}
                                onChange={(e)=>{
                                    setUpdateContent(e.target.value);
                                }}
                                className='rounded-md'
                            ></input>
                            <button
                                onClick={()=>{
                                    setTodos(todos.map((todo)=>todo==x?todo=updatecontent:todo));
                                    localStorage.setItem('todos', JSON.stringify(todos));
                                    setEdit();
                                }}
                            >done</button>
                        </div>
                        
                    : 
                        <div key={ind}className='flex w-80 justify-between'>
                            <div>{x}</div>
                            <div
                            onClick={()=>{
                                let data = (todos.filter((todo) => todo!=x));
                                setTodos(data);
                                localStorage.setItem('todos', JSON.stringify(data));
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='h-5 w-5'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>  
                            </div>
                            <div
                                onClick={()=>{
                                    setEdit(ind);
                                    setUpdateContent(x);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </div>
                        </div>
                )
            })
        }
    </div>
    </div>
    </div>
  )
}

export default MainBody;
