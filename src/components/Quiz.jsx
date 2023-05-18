import React, { useState, useEffect } from 'react'

import Question from './Question';
import Submit from './Submit';
import '../styles/quiz.css'

function Quiz(props) {

    const [questions, setQuestions]=useState([]);
    const [currentQuestion, setCurrentQuestion] = useState("")
    const [questionNumber, setQuestionNumber] = useState(0);
    const [marks, setMarks]= useState(0);
    const [submit, setSubmit]= useState(false);

    //Fetching data from the API
    useEffect(() => {
        
      getData();
      
      }, [])
    
    const getData = async ()=>{
      
      let data = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${import.meta.env.VITE_API_KEY}&limit=10&category=${props.data.toLowerCase()}`);
      data = await data.json();
      setCurrentQuestion(data[questionNumber]);
      setQuestions(data);
      
    }

    const handleMark=(val)=>{
      setMarks(marks+val);
      console.log(marks);
    }

    const handleChange=(val)=>{
      
      if(val==="prev")
        handlePrevQuestion();
      else
        handleNextQuestion();
    }

    const handleNextQuestion = async ()=>{
      if(questionNumber>=questions.length-1) return;
      setCurrentQuestion(questions[questionNumber+1]);
      setQuestionNumber(questionNumber+1);
    }

    const handlePrevQuestion = async ()=>{
      if(questionNumber<=0) return;
      setCurrentQuestion(questions[questionNumber-1]);
      setQuestionNumber(questionNumber-1);
    }

    const handleSubmit=()=>{
      setSubmit(true);
    }

  return (
    <>{ submit===false ? <>
     <div className='flex flex-col justify-center'>
        <h1 className="quiz">{props.data} Test</h1>
        <div className=''>
        {currentQuestion!==""&&<Question data={currentQuestion} change={handleChange} mark={handleMark} index={questionNumber}/>}
        </div>
         
        <div className='flex justify-center'>
        <button onClick ={handleSubmit} className='select-none p-2 w-32 my-2 mx-1 rounded-lg bg-teal-400 text-white font-semibold'>Submit</button>
        
        
        </div>
    </div>
    </> : <Submit title={props.data} marks={marks}/>
    }
    </>
  )
}

export default Quiz