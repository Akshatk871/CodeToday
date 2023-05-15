import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuestionState from './context/QuestionsState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <QuestionState>
 <App />
  </QuestionState>
  ,
)
