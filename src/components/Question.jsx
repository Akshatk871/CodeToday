import React, { useState } from 'react'
import '../styles/question.css'
import Option from './Option';

function Question(props) {
  console.log(props)

  const [mark, setMark]=useState(0);

  function checkValue(value){
    
    if(value===props.data.correct_answer){
       setMark(mark===0?1:0);}
    else{
        setMark(mark===1?0:1);
    }
    
  }
  const handlePrev=()=>{
    props.change("prev")
    props.mark(mark)
  }
  const handleNext=()=>{
    props.change("next")
    props.mark(mark)
  }
  return (
    <div className="question">
        
            
            <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                
                <p className="select-none mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{props.data.question}</p>
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <Option option={props.data.answers.answer_a} name="answer_a" onCheck={checkValue}/>
                    <Option option={props.data.answers.answer_b} name="answer_b" onCheck={checkValue}/>
                    <Option option={props.data.answers.answer_c} name="answer_c" onCheck={checkValue}/>
                    <Option option={props.data.answers.answer_d} name="answer_d" onCheck={checkValue}/>
                    <Option option={props.data.answers.answer_e} name="answer_e" onCheck={checkValue}/>
                    <Option option={props.data.answers.answer_f} name="answer_f" onCheck={checkValue}/>
                    
                    
                </div>
                <div className='flex my-1 justify-center'>
        <button onClick={handlePrev} className='select-none p-2 w-32 my-1 mx-1 rounded-lg bg-teal-400 text-white font-semibold'>Previous</button>
        <button onClick={handleNext} className='select-none p-2 w-32 my-1 mx-1 rounded-lg bg-teal-400 text-white font-semibold'>Next</button>
        
        </div>
                
            </div>
        </section></div>
          )
        }
        
            

        
        


  

export default Question