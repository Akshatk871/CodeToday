import React from 'react'
import '../styles/quiz.css'
import { Link } from 'react-router-dom'
function Submit(props) {
  return (
    <div className='min-w-full  submit'>
    <div class="block mx-auto my-60 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title} Test</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">You scored {props.marks} out of 10 questions correct. </p>
    <Link to="/" className='my-2 text-blue-500'>Take Another test</Link>
    </div>
    </div>
  )
}

export default Submit
