import React, { useState } from 'react'
import '../styles/home.css'
import Quiz from './Quiz';

function Home(){
    const tags=["Linux","BASH", "PHP", "Docker","HTML", "MySQL", "WordPress","Laravel","Kubernetes","Javascript","DevOps"];

    const [selected, setSelected] = useState(-1);
    
    
    const handleClick=(element)=>{
        
    }

    return(
        <>
       {selected===-1? <>
            <div className='heading'><h1>Test your Knowledge</h1></div>
            <div className='tags-card row'>

            {tags.map((element, index)=>{
                return(<div key={index} className="max-w-sm mx-2 my-2 p-6 bg-white tag-card border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">                
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{element}</h5>
                <button onClick={(()=> setSelected(index)
                )} className="inline-flex items-center text-blue-600 hover:underline">
                Take a test
                </button>
        </div>)
            })
            
            }

            

            
            </div>
</>:<Quiz data={tags[selected]} />}
        
        </>
    )   
}
export default Home