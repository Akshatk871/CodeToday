import QuestionContext from "./QuestionsContext";

const QuestionState = (props) => {

    const getQuestion = async ()=>{
        const questionPage = await fetch("https://leetcode.com/problems/two-sum/");
        console.log(questionPage.text())
    }
    
  
    return (
      <QuestionContext.Provider value={{ getQuestion }}>
        {props.children}
      </QuestionContext.Provider>
    );
  };
  
  export default QuestionState;