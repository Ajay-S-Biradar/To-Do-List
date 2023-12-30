import React, { useEffect, useState } from 'react'

const Header = ({addtodo}) => {
    const [activity,setActivity] = useState("");
  return (
    <>
    <div className='m-2'>
        <input type="text"
        placeholder='enter the task'
        value={activity}
        onChange={(e)=>{
            setActivity(e.target.value);
        }}
        className='rounded-md px-2 py-1 m-1'
        ></input>
        <button
            onClick={(()=>{
                if(activity){
                    addtodo(activity);
                    setActivity('');
                }
                else
                    alert('write some task');
            })}
            className='px-6 py-1 m-1 rounded-lg bg-neutral-300'
        >Add</button>
    </div>
    <div>
    </div>
    </>
    
  )
}

export default Header