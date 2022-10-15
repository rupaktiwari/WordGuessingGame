import React from "react"
import questions from "./Data"
import { useState } from "react"
import './index.css';

function Form () {

    const [ans,setAns] = useState("")

    const [currentQuestion, setCurrentQuestion] = useState(0);
	
    const handleSubmit = (evt) => {
        evt.preventDefault();
		//if(questions[currentQuestion].answer === ans){
		setCurrentQuestion(currentQuestion+1)
		//}
	//else{
		//setCurrentQuestion(currentQuestion)
		//}

    }

    const handleSkip = () => {
      setCurrentQuestion(currentQuestion+1);
    }

return(
    <div className="container">

    <div >
            
    <form  className = "form" onSubmit={handleSubmit}>
          
    <input type="text"  value = {ans} autoComplete = 'off' name = "formans" placeholder="Guess the associative word"  onChange={(e) => setAns(e.target.value)} />
    <div className="submit">
    <button className="submitButton" type='submit' >Submit</button>
    </div>
    
    </form>
   </div>
   <div>
    <hr className="line"/>
   </div>

  <div className="words">
  {questions[currentQuestion].questionText.map((questionText) => <div className='wordButtons'  ><h3>{questionText}</h3></div> )}
  </div>
  
  <div className="bottomButton">
  <button type="submit" name="footer" className="skipButton" onClick={handleSkip}>Skip</button>
  </div>

  </div>
  
)

}
export default Form;