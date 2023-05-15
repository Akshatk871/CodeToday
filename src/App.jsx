import { useContext, useEffect } from "react"
import QuestionContext from "./context/QuestionsContext"


function App() {

  const context = useContext(QuestionContext);
  const {getQuestion} = context;

  useEffect(()=>{
    getQuestion()
  }, [])

  return (
    <>
     <h1>Hiii</h1>
    </>
  )
}

export default App
