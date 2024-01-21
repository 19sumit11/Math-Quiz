import React, { useState } from "react";
import "./Quiz.css"
import {data} from "./Data.js"


const Quiz = () => {

    let [index,setIndex] = useState(1);
    let [question,setQuestion] =useState(data[index]);

return (
    <div className="container">
        <h1>MATH-QUIZ</h1>
        <hr/>
        <h2>{index+1}.{question.question}</h2>
        <ul>
            <li>{question.option1}</li>
            <li>{question.option1}</li>
            <li>{question.option1}</li>
            <li>{question.option1}</li>
            
        </ul>
        <button>Next</button>
        <div className="index">1 of 10 Questions</div>
       
    </div>
)}

export default Quiz