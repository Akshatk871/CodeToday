import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Submit from "./components/Submit";


function App() {


  return (
    <>
    <Router>
      <Header/>
      
      {/* <Quiz title="Linux"/> 
      <Submit title="linux" marks="8"/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/quiz" element={<Quiz authed={true}/>}></Route>
        <Route path="/submit" element={<Submit/>}></Route>
      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App
